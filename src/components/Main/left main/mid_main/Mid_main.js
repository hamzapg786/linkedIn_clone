import React from "react";
import "./Mid_main.css";

import { HiOutlinePhotograph } from "react-icons/hi";
import { RiVideoFill } from "react-icons/ri";
import { MdEventNote } from "react-icons/md";
import { RiArticleLine } from "react-icons/ri";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineInsertComment } from "react-icons/md";
import { RiShareForwardLine } from "react-icons/ri";
import { AiTwotoneLike } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { IoIosSend } from "react-icons/io";

const iconsData = [
  {
    icon: <HiOutlinePhotograph size={25} style={{ color: "skyBlue" }} />,
    title: "Photo",
  },
  {
    icon: <RiVideoFill size={25} style={{ color: "seaGreen" }} />,
    title: "Video",
  },
  {
    icon: <MdEventNote size={25} style={{ color: "orange" }} />,
    title: "Event",
  },
  {
    icon: <RiArticleLine size={25} style={{ color: "red" }} />,
    title: "Article",
  },
];

const bottomIconsData = [
  { icon: <AiOutlineLike size={24} />, title: "like" },
  { icon: <MdOutlineInsertComment size={24} />, title: "Comment" },
  { icon: <RiShareForwardLine size={24} />, title: "Share" },
  { icon: <IoIosSend size={24} />, title: "Send" },
];

const PostData = [
  { imgUrl: "9.jpg", name: "Hamza", avatarUrl: "4.jpg" },
  { imgUrl: "1.jpg", name: "Husnain", avatarUrl: "2.jpg" },
  { imgUrl: "3.jpg", name: "Hamza", avatarUrl: "5.jpg" },
];

const Mid_main = () => {
  return (
    <div className="mid_main">
      <div className="top_container">
        <div className="logo_input">
          <div></div>
          <input type="text" placeholder="Start a Post" />
        </div>
        <div className="icons">
          {iconsData.map((e, i) => (
            <IconsList icon={e.icon} title={e.title} key={i} />
          ))}
        </div>
      </div>
      {PostData.map((e, i) => (
        <Newsfeed data={e} key={i} />
      ))}
      {/* /////////----------news feed section-------/////// */}
    </div>
  );
};

const IconsList = ({ title, icon }) => {
  return (
    <div>
      {icon}
      <p>{title}</p>
    </div>
  );
};

const BottomIcons = ({ title, icon }) => {
  return (
    <div className="bottom_icons">
      {icon}
      {title}
    </div>
  );
};

const Newsfeed = ({ data }) => {
  return (
    <div className="news_feed">
      <div className="icon_disc">
        <img className="avatar" src={data.avatarUrl} alt="" />
        <div className="detail_icon">
          <h3>{data.name}</h3>
          <p>A passionate Front-end developer</p>
        </div>
      </div>

      <img className="feed_img" src={data.imgUrl} alt="" />
      <div className="reaction">
        <div>
          <AiTwotoneLike />
          <FcLike />
          <IoIosSend />
          <p>Hamza and 4 others</p>
        </div>
        <div>
          <p>1 Share</p>
        </div>
      </div>
      <hr style={{ width: "95%", margin: "auto" }} />
      <div className="bottom_icons">
        {bottomIconsData.map((e, i) => (
          <BottomIcons icon={e.icon} title={e.title} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Mid_main;
