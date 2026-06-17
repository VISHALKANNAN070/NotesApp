const errorMiddleware = (err, req, res, next) => {
  console.error(err);

  if (err.name === "ValidationError") {
    return res.status(400).json({ message: err.message });
  }

  if (err.name === "JsonWebTokenError" || err.name === "TokenExpiredError") {
    return res.status(401).json({ message: "Invalid or expired token" });
  }

  if (err.code === "23505") {
    return res.status(409).json({ message: "Duplicate entry" });
  }

  if (err.code === "23503") {
    return res
      .status(400)
      .json({ message: "Foreign key constraint violation" });
  }

  res.status(500).json({ message: "Server error" });
};

export default errorMiddleware;
