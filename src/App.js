import React from "react";
import logo from "./logo.svg";
import "./App.css";
import User from "./User";
function App() {
  return (
    <div className="App">
      <h1>App Component</h1>
      <User data={{ name: "sunil kumar mahto", age: 28 }} />
    </div>
  );
}

export default App;
