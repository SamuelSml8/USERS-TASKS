import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const authRequired = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).json({
      ok: false,
      message: "Unauthorized (NO TOKEN)",
      data: null,
    });
  }

  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({
        ok: false,
        message: "Unauthorized (INVALID TOKEN)",
        data: null,
      });
    }

    req.user = user;

    next();
  });
};
