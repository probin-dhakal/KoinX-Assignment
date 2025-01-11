import cron from "node-cron";
import { fetchCryptoData } from "../../controllers/fetchCryptoData.controller.js";

export const scheduleCronJob = () => {
  cron.schedule("0 */2 * * *", () => {
    console.log("Cron running every 2 hours");
    fetchCryptoData();
  });
};
