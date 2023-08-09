import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from 'dotenv';

//init
dotenv.config();
const app = express();

// Import routes
import userRoutes from "./routes/users.routes.js";
import paperRoutes from "./routes/papers.routes.js";

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Configura CORS
app.use(
  cors({
    origin: [process.env.ORIGIN, "http://127.0.0.1:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Routes
app.use("/api/users", userRoutes);
app.use("/api/papers", paperRoutes);

export default app;
