const Event = require("../models/Event");
const jwt = require("jsonwebtoken");

exports.createEvent = async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ msg: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { title, description, date, location } = req.body;

    const newEvent = new Event({
      title,
      description,
      date,
      location,
      createdBy: decoded.id
    });

    await newEvent.save();
    res.status(201).json({ msg: "Event created successfully 🎉", event: newEvent });

  } catch (err) {
    res.status(401).json({ msg: "Invalid token" });
  }
};

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find().populate("createdBy", "name email");
    res.json(events);
  } catch (err) {
    res.status(500).json({ msg: "Failed to fetch events" });
  }
};
