import React from "react";
import "./Left_main.css";
import { MdStoreMallDirectory } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";

const recentData = [
  { icon: <RiTeamFill />, title: "JavaScript Developer" },
  { icon: <RiTeamFill />, title: "React Developer" },
  { icon: <RiTeamFill />, title: "Html Developer" },
];

const Left_main = () => {
  return (
    <div className="left_main">
      <div className="profile_header">
        <img src="9.jpg" alt="" className="bg" />
        <img
          className="logo"
          src="/4.jpg"
          alt=""
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
        />
        <div className="logo_desc">
          <h4>Muhammad Hamza</h4>
          <p>JavaScript and React</p>
        </div>
        <div className="detail">
          <div className="desc_1">
            <p>Who viewed your profile</p>
            <p>66</p>
          </div>
          <div className="desc_2">
            <p>Views of your Post</p>
            <p>123</p>
          </div>
        </div>
        <div className="para">
          <p style={{ fontWeight: "bold" }}>Access exclusice tools</p>
          <p>Learn New skills</p>
        </div>
        <div className="end_header">
          <MdStoreMallDirectory />
          <p>My items</p>
        </div>
      </div>
      <div className="recent_section">
        <div className="recent_detail">
          <div className="bi_h">
            <h5>Recent</h5>
            <h4>Groups</h4>
          </div>
          {recentData.map((e, i) => (
            <Recent icon={e.icon} title={e.title} key={i} />
          ))}

          <p style={{ padding: "10px" }}>See all</p>
          <div></div>
        </div>
      </div>
    </div>
  );
};

const Recent = ({ title, icon }) => {
  return (
    <div>
      {icon}
      <p>{title}</p>
    </div>
  );
};

export default Left_main;
