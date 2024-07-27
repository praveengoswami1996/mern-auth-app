import { NextFunction, Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from "bcrypt";
import { errorHandler } from "../utils/errorHandler";

export const signupController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, email, password } = req.body;
  try {
    //Checking if the user already exists
    const existingUser = await User.findOne({
        $or: [{ username }, { email }]
    })

    if(existingUser) {
        next(errorHandler(400, "Username or email already exists"));
    }

    //Hashing the password for security
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    next(error);
  }
};
