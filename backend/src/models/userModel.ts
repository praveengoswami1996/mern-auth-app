import { Schema, model } from "mongoose";

interface User {
    username: string;
    email: string;
    password: string;
}

const userSchema = new Schema<User>({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

const User = model<User>('User', userSchema);

export default User;