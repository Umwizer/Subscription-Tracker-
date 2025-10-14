import { Router } from "express";

const SubscriptionRoutes = Router();

SubscriptionRoutes.get("/", (req, res) => {
  res.send("Get all Subscriptions");
});
SubscriptionRoutes.get("/:id", (req, res) => {
  res.send("Get Subscriptions");
});
SubscriptionRoutes.post("/", (req, res) => {
  res.send("Create Subscriptions");
});
SubscriptionRoutes.put("/:id", (req, res) => {
  res.send("Update Subscriptions");
});
SubscriptionRoutes.delete("/:id", (req, res) => {
  res.send("Delete Subscriptions");
});
SubscriptionRoutes.get("/user/:id", (req, res) => {
  res.send("Get all user Subscriptions");
});
SubscriptionRoutes.put("/:id/cancel", (req, res) => {
  res.send("Cancel all Subscriptions");
});
SubscriptionRoutes.get("/upcomig-renewals", (req, res) => {
  res.send("Getting Upcoming Renewals");
});
export default SubscriptionRoutes;
