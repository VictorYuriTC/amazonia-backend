import { Router } from "express";
import LoginController from "../controllers/LoginController";

const LoginRouter = Router();

LoginRouter.post("/", LoginController.login);

export default LoginRouter;
