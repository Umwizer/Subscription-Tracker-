const errorMiddleware = (err, res, req) => {
  //create subscription -> middleware (check for renewal date) -> middleware (check for subscription status )

  try {
    let error = { ...err };
    error.message = err.message;
    console.error(err);

    //mangoose bad ObjectId
    if (err.name === "CastError") {
      const message = "Resource not found";
      error = new Error(message);
      error.statusCode = 404;
    }

    //mongoose duplicate key
    if (err.name === 11000) {
      const message = "Duplicate field value entered";
      error = new Error(message);
      error.statusCode = 400;
    }

    //mongoose validation error
    if (err.name === "Validation Error") {
      const message = Object.values(err.errors).map((val) => val.message);
      error = new Error(message);
      error.statusCode = 400;
    }

    res
      .status(error.statusCode || 500)
      .json({ success: false, error: error.message || "Server error " });
  } catch (error) {
    next(error);
  }
};
