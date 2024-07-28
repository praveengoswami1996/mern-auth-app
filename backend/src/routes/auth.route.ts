import { Router } from "express";
import { signinController, signupController } from "../controllers/auth.controller";

//Creating an express router instance
const router = Router();

router.post("/signup", signupController);
router.post("/signin", signinController);

export default router;