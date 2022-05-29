import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import path from "path";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { swaggeroptions } from "./config/base.js";
import receiverRouter from "./routes/receivers.js";
import connectLivereload from "connect-livereload"
import livereload from "livereload"
import http from "http"


const app = express();
app.use(connectLivereload())
app.use(express.json());
dotenv.config();

const port = process.env.PORT || 3000;
const swaggerOptionsUi = swaggerJSDoc(swaggeroptions);
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(path.resolve(), "public")));
app.set("view engine", "ejs");
app.use("/api/receivers", receiverRouter);
app.use("/documentation", swaggerUi.serve, swaggerUi.setup(swaggerOptionsUi));
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

if (!process.env.NODE_ENV === "production") {
  const liverReloadServer = livereload.createServer()
  liverReloadServer.watch(path.join(path.resolve(), "public"))
  liverReloadServer.server.once('connection', ()=>{
    setTimeout(()=>{
      liverReloadServer.refresh("/")
    }, 100)
  })
}

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
