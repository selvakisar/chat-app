import express from "express";
import { Auth } from "../middlewares/auth.js";
import {
  accessChats,
  addToGroup,
  creatGroup,
  fetchAllChats,
  removeFromGroup,
  renameGroup,
} from "../controllers/chatControllers.js";

const router = express.Router();

router.post("/", Auth, accessChats);
router.get("/", Auth, fetchAllChats);
router.post("/group", Auth, creatGroup);
router.patch("/group/rename", Auth, renameGroup);
router.patch("/groupAdd", Auth, addToGroup);
router.patch("/groupRemove", Auth, removeFromGroup);
router.delete("/removeuser", Auth);

export default router;
