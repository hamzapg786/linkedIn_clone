import React from "react";
import Right_main from "../right_main/Right_main";
import Left_main from "./left main/Left_main";
import Mid_main from "./left main/mid_main/Mid_main";
import "./Main.css";

const Main = () => {
  return (
    <div className="container">
      <div className="left">
        <Left_main />
      </div>
      <div class="mid">
        <Mid_main />
      </div>
      <div class="right">
        <Right_main />
      </div>
    </div>
  );
};

export default Main;
