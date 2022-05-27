import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import receiverRouter from "./routes/receivers.js";
const app = express();
app.use(express.json());
dotenv.config();

const port = process.env.PORT || 3000;
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use("/api/receivers", receiverRouter)
app.get("/", (req, res) => {
  res.send("Welcome!");
});


mongoose
  .connect(process.env.MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db connection success");
    app.listen(port, () => console.log("server starting: ", port));
  })
  .catch((error) => console.log(error));
