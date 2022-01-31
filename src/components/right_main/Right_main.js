import React from "react";
import "./Right_main.css";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { HiPlus } from "react-icons/hi";

const Right_main = () => {
  return (
    <div className="right_main">
      <div className="main_container">
        <div className="intro">
          <p>Add to your feed</p>
          <BsFillInfoSquareFill />
        </div>

        <Feeds />
        <Feeds />
        <Feeds />
      </div>
    </div>
  );
};

const Feeds = () => {
  return (
    <div className="mini_sections">
      <div className="avatar"></div>
      <div>
        <p>Mohammad Tat Shahdoost</p>
        <p>Frontend Developer at Segmentino</p>
        <button className="button">
          <HiPlus /> Follow
        </button>
      </div>
    </div>
  );
};

export default Right_main;
