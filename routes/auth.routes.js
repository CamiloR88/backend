import { Router } from "express";

import { singUp, singIn, singOut } from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post("/sing-up", singUp);

authRouter.post("/sing-in", singIn);

authRouter.post("/sing-out", singOut);

export default authRouter;
