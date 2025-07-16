const express = require("express");
const { createEvent, getEvents,deleteEvents } = require("../controllers/eventController");

const router = express.Router();

router.post("/create", createEvent);
router.get("/", getEvents);

router.delete("/:id", deleteEvents);

module.exports = router;

