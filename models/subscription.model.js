import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    Names: {
      type: String,
      required: [true, "Subscription name is required"],
      trim: true,
      minLength: 2,
      maxLength: 100,
    },
    Price: {
      type: Number,
      required: [true, "Subscription price is required"],
      min: [0, "Price must be greater than zero (0)"],
    },
    Currency: {
      type: String,
      enum: ["USD", "EUR", "GBP", "RWF"],
    },
    Frequency: {
      type: String,
      enum: ["daily", "weekly", "monthly", "yearly"], // lowercase "yearly" to match logic
    },
    Category: {
      type: String,
      enum: [
        "sports",
        "news",
        "entertainment",
        "lifestyle",
        "technology",
        "finance",
        "politics",
        "other",
      ],
    },
    PaymentMethod: {
      type: String,
      required: true,
      trim: true,
    },
    Status: {
      type: String,
      enum: ["active", "cancelled", "pending"],
      default: "active",
    },
    StartDate: {
      type: Date,
      required: true,
      validate: {
        validator: function (value) {
          return value <= new Date();
        },
        message: "Start date must be in the past",
      },
    },
    RenewalDate: {
      type: Date,
      validate: {
        validator: function (value) {
          return !this.StartDate || value > this.StartDate;
        },
        message: "Renewal date must be after the start date",
      },
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
  },
  { timestamps: true }
);

subscriptionSchema.pre("save", function (next) {
  if (!this.RenewalDate) {
    const renewalPeriods = {
      daily: 1,
      weekly: 7,
      monthly: 30,
      yearly: 365,
    };

    // set RenewalDate based on Frequency
    this.RenewalDate = new Date(this.StartDate);
    this.RenewalDate.setDate(
      this.RenewalDate.getDate() + renewalPeriods[this.Frequency]
    );
  }
  if (this.RenewalDate < newDate()) {
    this.Status = "expired";
  }
  next();
});

const Subscription = mongoose.model("Subscription", subscriptionSchema);
export default Subscription;
