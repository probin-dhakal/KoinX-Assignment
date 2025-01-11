import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import Crypto from "../models/crypto.model.js";

//get crypto stats controller
export const getCryptoStats = catchAsyncErrors(async (req, res) => {
  const { coin } = req.query;

  if (!coin) {
    return res.status(400).json({
      error: "Query parameter coin not found",
    });
  }

  const cryptoData = await Crypto.findOne({ currency: coin });
  if (!cryptoData) {
    return res.status(404).json({
      error: "Crypto data not found",
    });
  }

  // console.log(cryptoData);
  return res.status(200).json({
    success: true,
    cryptoData,
  });
});

// get standard deviation controller
export const getStandardDeviation = catchAsyncErrors(async (req, res) => {
  const { coin } = req.query;

  if (!coin) {
    return res.status(400).json({
      error: "Query parameter coin not found",
    });
  }

  const records = await Crypto.find({ currency: coin })
    .sort({ createdAt: -1 })
    .limit(100);

  if (records.length === 0) {
    return res.status(404).json({
      error: "No records found",
    });
  }

  const prices = records.map((record) => record.price);

  const mean = prices.reduce((acc, price) => acc + price, 0) / prices.length;

  const variance =
    prices.reduce((acc, price) => acc + Math.pow(price - mean, 2), 0) /
    prices.length;

  const standardDeviation = Math.sqrt(variance);

  const deviation = parseFloat(standardDeviation.toFixed(2));
  // console.log(deviation);

  return res.status(200).json({
    success: true,
    deviation,
  });
});
