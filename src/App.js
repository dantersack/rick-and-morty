import React from "react";
import { AvailableResources } from "./features/resources/AvailableResources";
import "./App.css";

function App() {
  return (
    <main className="App">
      <h1>Rick and Morty</h1>
      <AvailableResources />
    </main>
  );
}

export default App;
