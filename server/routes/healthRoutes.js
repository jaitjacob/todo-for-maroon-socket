import { Router } from "express";

const healthRouter = Router();

healthRouter.get("/", (req, res) => {
  const healthCheckJson = { status: 'OK', timestamp: Date.now(), message: 'Todo backend is running' }

  res.status(200).json(healthCheckJson);
})

export default healthRouter;