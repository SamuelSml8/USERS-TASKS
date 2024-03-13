import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
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
export const login = (req, res) => {
  res.send("Login");
};
