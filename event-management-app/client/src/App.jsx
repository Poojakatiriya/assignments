import React from "react";
import EventList from "./components/EventList";
import EventForm from "./components/EventForm";
import "./App.css";

function App() {
  return (
    <div className="container py-4">
      <h1 className="text-center text-primary mb-4">
        🎉 Event Manager
      </h1>

      <EventForm />
      <hr />
      <EventList />

      <footer className="text-center text-muted mt-5">
        Built with React + Express + MongoDB + Bootstrap 🚀
      </footer>
    </div>
  );
}

export default App;

