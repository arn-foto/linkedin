import React from "react";
import "./App.css";
import Header from "../src/Header";
import Sidebar from "../src/Sidebar";
import Feed from "../src/Feed";

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app__body">
        <Sidebar />
        <Feed />
        {/* widgets */}
      </div>
    </div>
  );
}

export default App;
