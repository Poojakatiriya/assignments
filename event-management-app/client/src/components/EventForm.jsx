import React, { useState } from "react";
import api from "../api/axios";

const EventForm = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const token = localStorage.getItem("token");
      const res = await api.post("/events/create", form, {
        // headers: { Authorization: `Bearer ${token}` },
      });

      console.log(res)


      alert("✅ Event Created Successfully!");
      setForm({ title: "", description: "", date: "", location: "" });
    } catch (err) {
      alert("❌ Failed to create event");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
      <h4 className="mb-3">📌 Create New Event</h4>

      <div className="mb-3">
        <input
          type="text"
          name="title"
          className="form-control"
          placeholder="Event Title"
          value={form.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          name="description"
          className="form-control"
          placeholder="Event Description"
          value={form.description}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="date"
          name="date"
          className="form-control"
          value={form.date}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          name="location"
          className="form-control"
          placeholder="Event Location"
          value={form.location}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Create Event
      </button>
    </form>
  );
};

export default EventForm;


