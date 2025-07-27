import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const googleId = req.user?.googleId;
    if (!googleId) {
      return res.status(400).json({ message: "Google ID is required." });
    }
    const { success } = await ratelimit.limit({ id:googleId });

    if (!success) {
      return res
        .status(429)
        .json({ message: "Too many requests, please try again later." });
    }
    next();
  } catch (error) {
    console.error("Rate limiter error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default rateLimiter;
