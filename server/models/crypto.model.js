import mongoose, { Mongoose } from "mongoose";

const cryptoSchema = new mongoose.Schema(
  {
    currency: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    marketCap: {
      type: Number,
      required: true,
    },
    _24hrChange: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Crypto = mongoose.model("Crypto", cryptoSchema);
export default Crypto;
