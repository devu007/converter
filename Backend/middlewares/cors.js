import cors from "cors";

const corsMiddleware = cors({
  origin: "*", // Allow requests from any origin (replace '*' with your specific origin if needed)
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
});

export default corsMiddleware;
