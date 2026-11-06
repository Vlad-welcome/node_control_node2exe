import express from "express";
import * as MainController from "../controllers/mainController.js";

const router = express.Router();

router.get("/data", MainController.getData);
router.get("/moveMouse", MainController.moveMouse);

export default router;
