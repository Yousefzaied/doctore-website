const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");


const cookieParser = require("cookie-parser");
app.use(express.json());
app.use(cookieParser());
dotenv.config();
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://doctor-zaied.vercel.app"
];


app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));


// middler ware
const userRoutes = require("./routes/users.js");
const bookingRoutes = require("./routes/booking.js")


app.use("/api/auth", userRoutes);
app.use("/api/book", bookingRoutes)


mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => console.log("Server running on port 3000"));
  })
  .catch((err) => console.log(err));