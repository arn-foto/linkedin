import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1609232782648-a824eed4be79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>A. Navarro</h2>
        <h4>foto.arn@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">0000101</p>
        </div>
        <div className="sidebar__stat">
          <p>Connections</p>
          <p className="sidebar__statNumber">1,987,616</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("JavaScript")}
        {recentItem("React")}
        {recentItem("Redux")}
        {recentItem("HTML")}
        {recentItem("CSS")}
      </div>
    </div>
  );
}

export default Sidebar;