import express from "express";

import {
  addBooks,
  editBooks,
  getAllBooks,
  getById,
  removeBooks,
} from "../controllers/bookController.js";

const router = express.Router();

router.get("/", getAllBooks);
router.post("/", addBooks);
router.get("/:id", getById);
router.put("/:id", editBooks);
router.delete("/:id", removeBooks);

export default router;
