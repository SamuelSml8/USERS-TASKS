import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const userFound = await User.findOne({ email });
    if (userFound) {
      return res.status(400).json(["Email already exists"]);
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });

    const userSaved = await newUser.save();

    const token = await createAccessToken({ id: userSaved._id });

    res.cookie("token", token);
    res.json({
      ok: true,
      message: "User saved successfully",
      data: {
        id: userSaved._id,
        username: userSaved.username,
        email: userSaved.email,
        createAt: userSaved.createdAt,
        updateAt: userSaved.updatedAt,
      },
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      message: err.message,
      data: null,
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userFound = await User.findOne({ email });

    if (!userFound) {
      return res.status(400).json({
        ok: false,
        message: "User not found",
        data: null,
      });
    }

    const isMatch = await bcrypt.compare(password, userFound.password);

    if (!isMatch) {
      return res.status(400).json({
        ok: false,
        message: "Invalid password",
        data: null,
      });
    }

    const token = await createAccessToken({ id: userFound._id });

    res.cookie("token", token);
    res.json({
      ok: true,
      message: "User logged in successfully",
      data: {
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        createAt: userFound.createdAt,
        updateAt: userFound.updatedAt,
      },
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      message: err.message,
      data: null,
    });
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.status(200).json({
    ok: true,
    message: "User logged out successfully",
    data: null,
  });
};

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);

  if (!userFound) {
    return res.status(400).json({
      ok: false,
      message: "User not found",
      data: null,
    });
  }

  return res.json({
    ok: true,
    message: "User found",
    data: {
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createAt: userFound.createdAt,
      updateAt: userFound.updatedAt,
    },
  });
};

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({
      ok: false,
      message: "Unauthorized",
      data: null,
    });
  }

  jwt.verify(token, TOKEN_SECRET, async (err, user) => {
    if (err) {
      return res.status(401).json({
        ok: false,
        message: "Unauthorized",
        data: null,
      });
    }

    const userFound = await User.findById(user.id);
    if (!userFound) {
      return res.status(401).json({
        ok: false,
        message: "Unauthorized",
        data: null,
      });
    }

    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });
  });
};
