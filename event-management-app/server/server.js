const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is working ✅");
});

app.use("/auth", authRoutes);

const eventRoutes = require("./routes/eventRoutes");
app.use("/events", eventRoutes);


// mongoose.connect(process.env.MONGO_URI)
//   .then(() => app.listen(5000, () => console.log("Server running on http://localhost:5000")))
//   .catch(err => console.error(err));

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI);
		console.log("MongoDB connected successfully");
	} catch (err) {
		console.error("MongoDB connection error:", err);
		process.exit(1); // Exit process if DB connection fails
	}
};

connectDB(); // Connect to MongoDB

app.listen(5000, () => {
	console.log("Server running on http://localhost:5000");
});
