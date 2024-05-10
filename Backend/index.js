import express from "express";
import route from "./routes/api.js";
import corsMiddleware from "./middlewares/cors.js";
import errorHandlerMiddleware from "./middlewares/errorHandler.js";

const app = express();

// Use the CORS middleware
app.use(corsMiddleware);

// Use the API routes
app.use("/", route);

// Use the error handler middleware
app.use(errorHandlerMiddleware);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
