import express from "express";
import { Auth } from "../middlewares/auth.js";
import { getMessages, sendMessage } from "../controllers/messageControllers.js";
const router = express.Router();

router.post("/", Auth, sendMessage);
router.get("/:chatId", Auth, getMessages);
export default router;
