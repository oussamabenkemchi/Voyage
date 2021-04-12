import React from "react";
import { Button } from "./Button";
import video from "../videos/video-1.mp4";
import "./Section.css";

function Section() {
  return (
    <div className="section-container">
      <video src={video} autoPlay loop muted />
      <h1>Adventure Awaits</h1>
      <p>What are you waiting for ?</p>
      <div className="section-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle"></i>{" "}
        </Button>
      </div>
    </div>
  );
}

export default Section;
