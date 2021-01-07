import React, { useEffect } from "react";
import "./App.css";
import Header from "../src/Header";
import Sidebar from "../src/Sidebar";
import Feed from "../src/Feed";
import { selectUser, login, logout } from "./features/userSlice";
import Login from "./Login";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.profileURL,
          })
        );
        // user is logged in
      } else {
        dispatch(logout());
        // user is logged out
      }
    });
  }, []);

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
