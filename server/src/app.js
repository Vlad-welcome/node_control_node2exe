import dotenv from "dotenv";
dotenv.config();

import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import cookieParser from "cookie-parser";
import logger from "morgan";
import { errorHandler } from "./middlewares/errorHandler.js";

//import cors from "cors";

import mainRouter from "./routes/mainRouter.js";

import { isSea } from "node:sea";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
//app.use(cors());

app.use(errorHandler);

app.use("/api/main", mainRouter);

//const __dirname = path.dirname(fileURLToPath(import.meta.url));
const __dirname = __dirname;

// ── Статика React ──
let staticDir;
if (isSea()) {
  staticDir = path.join(__dirname, "..", "front", "dist"); //prod
} else {
  staticDir = path.join(__dirname, "..", "..", "front", "dist"); //dev
}
app.use(express.static(staticDir));

// ── SPA-fallback: всё, что не /api и не файл → index.html ──
app.get("*", (req, res) => {
  res.sendFile(path.join(staticDir, "index.html"));
});

export default app;

//heroku
