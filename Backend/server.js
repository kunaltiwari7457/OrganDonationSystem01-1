const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");  // To parse JSON requests
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());  // This is necessary to handle JSON body

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup",
});

db.connect((err) => {
  if (err) {
    console.log("Database connection failed", err);
  } else {
    console.log("Connected to the database!");
  }
});

// Signup route
app.post("/signup", (req, res) => {
  const { email, password } = req.body;
  
  const sql = "INSERT INTO login (email, password) VALUES (?, ?)";
  const values = [email, password];

  db.query(sql, values, (err, data) => {
    if (err) {
      return res.json({ message: "Error during signup", error: err });
    }
    return res.json({ message: "User signed up successfully", data });
  });
});

// Login route
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  
  const sql = "SELECT * FROM login WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, data) => {
    if (err) {
      return res.json({ message: "Error during login", error: err });
    }
    if (data.length === 0) {
      return res.json({ message: "Invalid credentials" });
    }
    return res.json({ message: "Login successful", data });
  });
});

// Server listening
app.listen(3300, () => {
  console.log("Backend running on port 3300");
});
