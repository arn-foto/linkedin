import React from "react";
import "./App.css";
import Header from "../src/Header";
import Sidebar from "../src/Sidebar";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        {/* app body */}
        {/* sidebar */}
        {/* feed */}
        {/* widgets */}
      </div>
    </div>
  );
}

export default App;
