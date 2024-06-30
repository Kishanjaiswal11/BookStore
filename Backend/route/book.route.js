import express from "express";
import { getBook, search } from "../controller/book.controller.js";
import { makePayment } from "../controller/makePayment.controller.js";
import { authenticateToken } from "../middleware/userAuth.js";

const router = express.Router();

router.get("/", getBook);
router.get("/course", getBook);
router.get("/:q", search);
router.get("/course/:q", search);
router.post("/course/api/payment", authenticateToken, makePayment);

export default router;
