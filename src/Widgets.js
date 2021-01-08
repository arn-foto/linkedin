import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Linkedin News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Shocking news! - Air is now BAD for you!", "water too!")}
      {newsArticle(
        "More news! - This App was created with React Js",
        "Redux too!"
      )}
      {newsArticle(
        "Firebase is being used for authentication!",
        "Learn about how cool it is!"
      )}
      {newsArticle("This App was deployed with Firebase!", "totally!")}
      {newsArticle("Css & materialUI for styling", "HTML")}
    </div>
  );
}

export default Widgets;
