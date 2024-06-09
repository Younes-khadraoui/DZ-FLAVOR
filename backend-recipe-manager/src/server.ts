import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { authRoutes } from "./routes/authRoutes";
import { User } from "./models/userModel";

const cors = require("cors");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => {
    console.log("MongoDB connected");

    const db = mongoose.connection;
    console.log(`MongoDB connected to: ${db.host}:${db.port}`);

    User.findOne({})
      .then(() => {
        console.log("Database read/write test passed");
      })
      .catch((err) => {
        console.error("Database read/write test failed", err);
      });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
