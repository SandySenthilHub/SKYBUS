const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const UserModel = require("../models/user.model");

const app = express.Router();

// Signup Route
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the email already exists
    let existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).send({
        status: "Failed",
        message: "Email already in use. Please try a different email.",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user with the hashed password
    const newUser = await UserModel.create({
      ...req.body,
      password: hashedPassword,
    });

    return res.status(201).send({
      status: "Success",
      message: "Signup successful!",
    });
  } catch (error) {
    return res.status(500).send({
      status: "Failed",
      message: error.message,
    });
  }
});

// Login Route

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    console.log("User found:", user); // Debugging log

    if (!user) {
      return res.status(400).send({ status: "Failed", message: "Email not found" });
    }

    // Compare hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password match:", isMatch); // Debugging log

    if (!isMatch) {
      return res.status(400).send({ status: "Failed", message: "Invalid password" });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET || "1234", { expiresIn: "1h" });
    console.log("Generated token:", token); // Debugging log

    // Respond with user and token
    res.send({
      status: "Success",
      message: {
        user: { _id: user._id, email: user.email, gender: user.gender },
        token,
      },
    });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).send({ status: "Failed", message: error.message });
  }
});


module.exports = app;
