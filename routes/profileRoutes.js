import express from "express";
import { getProfile, upsertProfile } from "../controllers/profileController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();
router.get('/', authMiddleware, getProfile);
router.post('/', authMiddleware, upsertProfile);
export default router;