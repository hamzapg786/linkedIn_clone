import React, { useState } from "react";
import "./Header.css";
import { BsLinkedin } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { IoHomeSharp } from "react-icons/io5";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import { RiMessage3Fill } from "react-icons/ri";
import { IoNotificationsSharp } from "react-icons/io5";
import { CgMenuGridR } from "react-icons/cg";

const Header = () => {
  let [input, setInput] = useState(false);

  const iconData = [
    { icon: <IoHomeSharp size={22} />, title: "Home" },
    { icon: <BsFillPeopleFill size={22} />, title: "Network" },
    { icon: <MdWork size={22} />, title: "Jobs" },
    { icon: <RiMessage3Fill size={22} />, title: "Messages" },
    { icon: <IoNotificationsSharp size={22} />, title: "Notification" },
  ];

  return (
    <div className="App_header">
      <div className="header_left">
        <div className="linked_icon">
          <BsLinkedin size={39} style={{ color: "#0A66C2" }} />
        </div>
        <div
          className="search_box"
          style={{
            width: input ? "380px" : "300px",
            transition: "all 300ms ease-in-out",
          }}
          onClick={() => setInput(!input)}
        >
          <FiSearch style={{ margin: "0 20px" }} />
          <input type="text" placeholder="search" />
        </div>
      </div>
      <div className="header_mid">
        {iconData.map((e, i) => (
          <HeaderList icon={e.icon} title={e.title} key={i} />
        ))}
        <div>
          <div className="avatar"></div>
          <p>Me</p>
        </div>
        <span className="line"></span>
        <div>
          <CgMenuGridR size={24} />
          <p>Work</p>
        </div>
        <div>
          <p>Try premium</p>
          <p> for free</p>
        </div>
      </div>
    </div>
  );
};

const HeaderList = ({ icon, title }) => {
  return (
    <div className="header_mid">
      <div className="header_icon__layout">
        {icon}
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Header;
