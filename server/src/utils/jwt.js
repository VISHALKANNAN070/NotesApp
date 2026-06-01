import jwt from "jsonwebtoken";

const generateToken = (userId) => {
  try {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    return token;
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default generateToken;
