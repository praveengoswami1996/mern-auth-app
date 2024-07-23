import express from "express";
import dotenv from "dotenv";
import connectWithDB from "./db/dbConfig";
import AppRouter from "./routes/userRoutes";

//Configuring dotenv: It will allow us to access environment variables through process.env
dotenv.config();

//Connecting with MongoDB
connectWithDB();

//Creating express application
const app = express();
const PORT = process.env.PORT || 5000;


app.get("/", (req, res) => {
    res.send("API is running.....")
})

app.use(express.json());

app.use("/api/users", AppRouter);


app.use((error) => {
    console.log(error);
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})