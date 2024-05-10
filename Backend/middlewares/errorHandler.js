const errorHandlerMiddleware = (err, req, res, next) => {
  console.error("An error occurred:", err);

  // Handle specific errors or send a generic error response
  res.status(500).json({ error: "Internal Server Error" });
};

export default errorHandlerMiddleware;
