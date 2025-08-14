import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export const authenticateToken = async (req, res, next) => {
  try {
    // TODO: Implement the authentication middleware
    // 1. Get the token from the request header
    // 2. Verify the token
    // 3. Get the user from the database
    // 4. If the user doesn't exist, throw an error
    // 5. Attach the user to the request object
    // 6. Call the next middleware

    
    
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({
        success: false,
        message: "Invalid token",
      });
    }

    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message: "Token expired",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Authentication error",
    });
  }
};
