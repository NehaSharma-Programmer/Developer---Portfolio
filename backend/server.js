 const dns = require("dns");

// Node.js ko Cloudflare DNS use karne ke liye force karo
dns.setServers(["1.1.1.1", "8.8.8.8"]);



const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();


// Database Connection
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Portfolio Backend Running Successfully");
});

// Error Handler
app.use(errorHandler);

// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});