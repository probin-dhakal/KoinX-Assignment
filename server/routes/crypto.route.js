import express from "express";
import {
  getCryptoStats,
  getStandardDeviation,
} from "../controllers/crypto.controller.js";

const router = express.Router();

router.get("/stats", getCryptoStats);
// http://localhost:8005/api/v1/crypto/stats?coin=bitcoin

router.get("/deviation", getStandardDeviation);
//http://localhost:8005/api/v1/crypto/deviation?coin=bitcoin

export default router;
