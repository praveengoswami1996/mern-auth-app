import { Router } from "express";
import { signupController } from "../controllers/auth.controller";

//Creating an express router instance
const router = Router();

router.post("/signup", signupController);

export default router;