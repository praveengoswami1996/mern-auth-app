import mongoose from "mongoose";

const connectWithDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI as string);
        console.log("Mongodb connected successfully.")
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

export default connectWithDB;