import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import connectWithDB from "./db/dbConfig";
import AppRouter from "./routes/user.route";
import AuthRouter from "./routes/auth.route";
import cors from "cors";

//Configuring dotenv: It will allow us to access environment variables through process.env
dotenv.config();

//Connecting with MongoDB
connectWithDB();

//Creating express application
const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
    origin: "http://localhost:5173", //allowed origins
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'], //allowed methods
    credentials: true, //Enables or disables sending cookies and HTTP Authentication information
}


app.use(cors(corsOptions))
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API is running.....")
})

app.use("/api/user", AppRouter);
app.use("/api/auth", AuthRouter);


//Error handling middleware
/* The next parameter is required for an error-handling middleware in Express. This parameter is typically not used but must be present to be recognized as an error-handling middleware. */

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    return res.status(statusCode).json({
        success: false,
        message,
        statusCode
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})