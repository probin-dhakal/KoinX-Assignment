import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./config/dbConnect/dbConnect.js";
import { scheduleCronJob } from "./config/cron/cronTask.js";
import cryptoRoutes from "./routes/crypto.route.js";

scheduleCronJob();

const app = express();

dotenv.config();

const PORT = process.env.PORT || 8005;

//middleware
app.use(express.json());

//route
app.use("/api/v1/crypto", cryptoRoutes);

//database connection
dbConnect();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
