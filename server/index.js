import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();

app.use("/posts", postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// https://www.mongodb.com/cloud/atlas
// mongodb+srv://<username>:<password>@cluster0.o8jsw.mongodb.net/?retryWrites=true&w=majority
// @TODO: update username and password with .env variables
const DB_CONNECTION_URL =
  "mongodb+srv://bobRoss:bobRoss123@cluster0.o8jsw.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5001;

mongoose
  .connect(DB_CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  })
  .catch((error) => {
    console.log("error:", error.message);
  });
