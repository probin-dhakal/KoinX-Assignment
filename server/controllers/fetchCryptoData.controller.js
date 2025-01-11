import axios from "axios";
import Crypto from "../models/crypto.model.js";

export const fetchCryptoData = async () => {
  try {
    const res = await axios.get(process.env.CRYPTO_API, {
      params: {
        ids: "bitcoin,ethereum,matic-network",
        vs_currencies: "usd",
        include_market_cap: "true",
        include_24hr_change: "true",
      },
    });

    // console.log(res.data);
    const bitcoinData = res.data.bitcoin;
    //   console.log(bitcoinData)

    const ethData = res.data.ethereum;
    //  console.log(ethData)
    const maticData = res.data["matic-network"];
    //  console.log(maticData);

    const cryptoData = [
      {
        currency: "bitcoin",
        price: bitcoinData.usd,
        marketCap: bitcoinData.usd_market_cap,
        _24hrChange: bitcoinData.usd_24h_change,
      },
      {
        currency: "ethereum",
        price: ethData.usd,
        marketCap: ethData.usd_market_cap,
        _24hrChange: ethData.usd_24h_change,
      },
      {
        currency: "matic-network",
        price: maticData.usd,
        marketCap: maticData.usd_market_cap,
        _24hrChange: maticData.usd_24h_change,
      },
    ];

    await Crypto.insertMany(cryptoData);
  } catch (error) {
    console.log("Error in fetchCryptoData controller:  ", error.message);
  }
};
