import { NextFunction, Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from "bcrypt";

export const registerUserController = async (req:Request, res:Response, next:NextFunction) => {
    const { name, email, password } = req.body;
    
    try {
        //Check if user already exists
        const existingUser = await User.findOne({ email });
        if(existingUser) {
            return res.status(400).json({
                status: false,
                message: "User already exists"
            })
        }

        //Hashing the password for security
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        const newUser = new User({ name, email, password: hashedPassword });

    } catch (error) {
        next(error);
    }
}