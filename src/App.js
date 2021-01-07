import React from "react";
import "./App.css";
import Header from "../src/Header";
import Sidebar from "../src/Sidebar";
import Feed from "../src/Feed";
import { selectUser } from "./features/userSlice";
import Login from "./Login";
import { useSelector } from "react-redux";
function App() {
  const user = useSelector(selectUser);

  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          {/* widgets */}
        </div>
      )}
    </div>
  );
}

export default App;
