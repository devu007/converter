import express from "express";
import { ExchangeRates } from "../controller/api-controller.js";

// Create a new router instance
const route = express.Router();

// Define a route to handle GET requests to "/cryptocurrencies"
route.get("/cryptocurrencies", ExchangeRates);

// Export the router to be used by the application
export default route;
