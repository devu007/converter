import dotenv from "dotenv";
import axios from "axios";

export const ExchangeRates = async (req, res) => {
  try {
    const apiKey = process.env.API_KEY;

    // Make a GET request to the CoinGecko API to fetch exchange rates
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/exchange_rates",
      {
        headers: {
          "Content-Type": "application/json",
          "X-CoinGecko-Api-Key": apiKey, // Include your API key in the request headers
        },
      }
    );

    console.log("Received response from CoinGecko API");

    // Extract data from the response
    const data = await response.data;

    // Send the exchange rates data back to the client as a JSON response
    res.json(data);
  } catch (error) {
    // Handle errors
    console.error("Error fetching exchange rates:", error);

    // Send a 500 Internal Server Error response back to the client
    res.status(500).send("Internal Server Error", error);
  }
};
