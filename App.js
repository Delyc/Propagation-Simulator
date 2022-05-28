import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import path from "path";
import receiverRouter from "./routes/receivers.js";
const app = express();
app.use(express.json());
dotenv.config();

const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(path.resolve(), "public")));
app.set("view engine", "ejs");
app.use("/api/receivers", receiverRouter);
app.get("/", (req, res) => {
  return res.sendFile(path.join(path.resolve(), "views/index.html"));
});
app.get("/add", (req, res) => {
  return res.sendFile(path.join(path.resolve(), "views/add.html"));
});
app.get("/view", (req, res) => {
  return res.sendFile(path.join(path.resolve(), "views/receivers.html"));
});
app.all("*", (req, res) => {
  return res.redirect("/");
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
