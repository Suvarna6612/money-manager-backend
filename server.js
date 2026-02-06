const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

// MongoDB connection (CLEAN VERSION)
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB connected");
})
.catch(err => {
  console.log("MongoDB error:", err);
});

app.use("/api/transactions", require("./routes/transaction"));

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});