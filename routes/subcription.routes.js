import { Router } from "express";

const subcriptionRouter = Router();

subcriptionRouter.get("/", (req, res) => {
  res.send({ message: "Get all subcriptions" });
});
subcriptionRouter.get("/:id", (req, res) => {
  res.send({ message: "Get subcriptions details" });
});
subcriptionRouter.post("/", (req, res) => {
  res.send({ message: "Create subcription" });
});
subcriptionRouter.put("/:id", (req, res) => {
  res.send({ message: "Update subcription" });
});
subcriptionRouter.delete("/:id", (req, res) => {
  res.send({ message: "Delete subcription" });
});
subcriptionRouter.get("user/:id", (req, res) => {
  res.send({ message: "Get all user subcriptions" });
});
subcriptionRouter.put("/:id/cancel", (req, res) => {
  res.send({ message: "Cancel subcription" });
});
subcriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.send({ message: "Get all subcriptions" });
});

export default subcriptionRouter;
