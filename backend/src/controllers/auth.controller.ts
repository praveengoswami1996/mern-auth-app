import { NextFunction, Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from "bcrypt";

export const signupController = async (req:Request, res:Response, next:NextFunction) => {
    const { username, email, password } = req.body;
    //Hashing the password for security
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const newUser = new User({ username, email, password: hashedPassword });
    
    try {
        await newUser.save();
        res.status(201).json({
            success: true,
            message: "User created successfully"
        })
    } catch (error) {
        next(error);
    }
}