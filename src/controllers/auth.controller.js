import User from "../models/user.model.js";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({
      username,
      email,
      password,
    });

    const userSaved = await newUser.save();
    res.json({
      ok: true,
      message: "User saved successfully",
      data: userSaved,
    });
  } catch (err) {
    console.log(err);
  }
};
export const login = (req, res) => {
  res.send("Login");
};
