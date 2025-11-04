import express from "express";
import * as FlagsController from "../controllers/flagsController.js";

const router = express.Router();

router.get("/", FlagsController.getFlags);
router.post("/", FlagsController.addFlag);
router.patch("/:id/toggle", FlagsController.toggleFlag);
router.delete("/:id", FlagsController.deleteFlag);

export default router;
