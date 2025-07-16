const Event = require("../models/Event");
const jwt = require("jsonwebtoken");

exports.createEvent = async (req, res) => {
  // const token = req.headers.authorization?.split(" ")[1];

  // if (!token) return res.status(401).json({ msg: "No token provided" });

  try {
    // const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { title, description, date, location } = req.body;

    const newEvent = new Event({
      title,
      description,
      date,
      location,
      createdBy: "decoded.id"
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


exports.deleteEvents = async (req, res) => {
	try {
		const { id } = req.params;

		if (!id) {
			return res.status(400).json({ msg: "Event ID is required" });
		}

		const deletedEvent = await Event.findByIdAndDelete(id);

		if (!deletedEvent) {
			return res.status(404).json({ msg: "Event not found" });
		}

		res
			.status(200)
			.json({ msg: "Event deleted successfully 🗑️", event: deletedEvent });
	} catch (err) {
		console.error("Error deleting event:", err);
		res.status(500).json({ msg: "Failed to delete event" });
	}
};