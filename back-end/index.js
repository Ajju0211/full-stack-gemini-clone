import express from "express";
import dotenv from "dotenv";
import router from "./routes/authRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDB } from "./DB/connectDB.js";

dotenv.config();

const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());
const PORT = process.env.PORT || 3000;

app.use(express.json());  // allows us to parse incoming requests with JSON payloads

app.use("/api/auth", router);





app.listen(PORT, () => { 
    console.log(`Server is runing ${PORT} ...`)
    connectDB();
})