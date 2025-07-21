import React from "react";
import EventList from "./components/EventList";
import EventForm from "./components/EventForm";
import "./App.css";

function App() {
  return (
    <div className="container py-4">
      <h1 className="text-center mb-4" style={{ color: 'white' }}>

        Event Management System
      </h1>

      <EventForm />
      <hr />
      <EventList />

    </div>
  );
}

export default App;

