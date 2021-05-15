import React from "react";
import "./Card.css";
import { useState, useEffect } from "react";
import axios from "axios";
import cw from "../assets/cw.svg";
import design from "../assets/design.svg";
import growingman from "../assets/growing-up-man.svg";
import mail from "../assets/mail.svg";
import man from "../assets/man.svg";
import map from "../assets/map.svg";
import padlock from "../assets/padlock.svg";
import phone from "../assets/phone.svg";

const UserCard = () => {
  const [userList, setUserList] = useState();

  const userData = () => {
    axios.get("https://randomuser.me/api/").then((res) => {
      setUserList(res.data.results);
    });
  };
  useEffect(() => {
    userData();
  }, []);

  return (
    <div className="main_container">
      <div className="cw">
        <img src={cw} alt="cw" className="cw-logo" />
      </div>
      {userList?.map((user, index) => (
        <div className="Card_box" key={index}>
          <img src={user.picture.large} alt="pic" className="profile_photo" />
          <p>
            {user.name.first} {user.name.last}
          </p>
          <div className="profile_box">
            <img src={man} alt="man" className="logo" />
            <img src={mail} alt="mail" className="logo" />
            <img src={growingman} alt="growing" className="logo" />
            <img src={map} alt="map" className="logo" />
            <img src={phone} alt="phone" className="logo" />
            <img
              onMouseOver={userData}
              onMouseLeave={null}
              src={padlock}
              alt="padlock"
              className="logo"
            />
            <button onClick={userData}>NEW USER</button>
            <button>ADD USER</button>
          </div>
          <div className="footer_design">
            <img src={design} alt="design" className="design" />
          </div>
        </div>
      ))}
    </div>
  );
};
export default UserCard;
