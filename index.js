import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/bookRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;
const CONNECTION_URL = process.env.CONNECTION_URL;
app.use(express.urlencoded({ extended: false }));
app.use(express.json({}));
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to Book Store Application</h1>");
});

app.use("/books", router); //http://localhost:5000/books/

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(
      PORT,
      console.log(`Server is running in: http://localhost:${PORT}`)
    )
  )
  .catch((err) => console.log(`Something went wrong. ErrorMsg: ${err}`));
