import { NextFunction, Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from "bcrypt";
import { errorHandler } from "../utils/errorHandler";
import jwt from "jsonwebtoken";

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

export const signinController = async (req:Request, res:Response, next: NextFunction) => {
  const { identifier, password } = req.body;

  try {
    //Finding if the user is valid
    const validUser = await User.findOne({
      $or: [{ username: identifier }, { email: identifier }]
    })

    if(!validUser) {
      next(errorHandler(404, "User not found"));
    } else {
      //Checking if password matches
      const validPassword = bcrypt.compareSync(password, validUser.password);
      if(!validPassword) {
        next(errorHandler(401, "Invalid login credentials"));
      }

      //Create and sign JWT token
      const token = jwt.sign(
        { userId: validUser._id },
        process.env.JWT_SECRET as string,
        { expiresIn: '24h' }
      )

      // Set token in cookie
      res.cookie('access_token', token, {
        // Helps prevent XSS attacks by restricting access to the cookie
        httpOnly: true, 
        // Ensures the cookie is only sent over HTTPS in production
        // secure: process.env.NODE_ENV === 'production',
        // 24 hours 
        maxAge: 24 * 60 * 60 * 1000, 
      });

      const { _id, username, email } = validUser;

      res.status(200).json({
        success: true,
        message: "Login successful",
        user: { _id, username, email }
      });
    }

  } catch (error) {
    next(error);
  }
}