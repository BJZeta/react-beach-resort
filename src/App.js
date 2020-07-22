import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

function App() {
  return (
    <div>
      <Home />
      <Rooms />
      <h1>Matrix code for one last time?</h1>
    </div>
  );
}

export default App;
