import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { authRoutes } from "./routes/authRoutes";
import { recipeRoutes } from "./routes/recipeRoutes";
import { categoryRoutes } from "./routes/categoryRoutes";
import { suggestionsRoutes } from "./routes/suggestionsRoutes";

const cors = require("cors");
const morgan = require('morgan');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: [process.env.ALLOWED_ORIGIN as string],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/recipes", recipeRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/suggestions", suggestionsRoutes);
app.use(morgan('combined'));

mongoose.set("debug", true);
const { MONGODB_URI } = process.env;

mongoose.connect(MONGODB_URI as string);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB!");
});

app.get("/", (req, res) => {
  res.send("Welcome to DZFlavor API!");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
