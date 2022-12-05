import React from "react";
import { AvailableResources } from "./features/resources/AvailableResources";
import Header from "./components/header/Header";
import "./App.css";

function App() {
  return (
    <main className="App">
      <Header />
      <AvailableResources />
    </main>
  );
}

export default App;
