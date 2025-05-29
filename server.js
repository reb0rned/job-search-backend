import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import { connectDB } from "./config/db.js";

dotenv.config();
const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);

connectDB().then(() => {
  app.listen(process.env.PORT, () =>
    console.log(`Server started on port ${process.env.PORT}`)
  );
});