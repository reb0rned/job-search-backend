import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import { connectDB } from "./config/db.js";

dotenv.config();
const app = express();

const allowedOrigins = [
  "http://localhost:3000",
  "https://job-search-frontend-3zxt5ndt3-reb0rneds-projects.vercel.app",
  "https://job-search-frontend-git-main-reb0rneds-projects.vercel.app",
  "https://job-search-frontend-ltfl.vercel.app",
  "https://job-search-frontend-reb0rneds-projects.vercel.app",
  "https://job-search-frontend-kohl.vercel.app",
];
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.warn(`Blocked by CORS: ${origin}`);
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);

app.get("/", (req, res) => {
  res.send("Server is running");
});

connectDB().then(() => {
  app.listen(process.env.PORT, () =>
    console.log(`Server started on port ${process.env.PORT}`)
  );
});
