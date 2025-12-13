const userModel = require("../model/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// user Register APi - POST method
const registerAPI = async (req, res) => {
  

  try {
    const { username, userEmail, password, role } = req.body;
    if (!username || !userEmail || !password || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const emailCheck = await userModel.findOne({ userEmail });

    if (emailCheck) {
      return res.status(400).json({ message: "User account already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new userModel({
      username,
      userEmail,
      password: hashedPassword,
      role,
    });
    await newUser.save();
    res.status(201).json({ message: "User Account created successfully..." });
  } catch (err) {
    res.status(500).json({ message: "registration failed" });
  }
};

// Login API - POST method
const loginAPI = async (req, res) => {
  const { userEmail, password } = req.body;
  const user = await userModel.findOne({ userEmail });
  if (!user) {
    return res
      .status(404)
      .json({ message: "User account not found , Please register " });
  }

  const passwordCheck = await bcrypt.compare(password, user.password);
  if (!passwordCheck) {
    return res.status(401).json({ message: "Password not matches" });
  }

  // JWT authentication
  const token = jwt.sign(
    {
      userId: user._id,
      username :user.name,
      userEmail: user.Email,
      role: user.role,
    },
    process.env.secret_key,
    { expiresIn: "24h" }
  );
  res.status(200).json({ message: "Login success", token: token });
};

module.exports = { registerAPI ,loginAPI };
