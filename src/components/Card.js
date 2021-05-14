import "./Card.css";
import React from "react";
import cw from "../assets/cw.svg";
import design from "../assets/design.svg";
import growingman from "../assets/growing-up-man.svg";
import mail from "../assets/mail.svg";
import man from "../assets/man.svg";
import map from "../assets/map.svg";
import padlock from "../assets/padlock.svg";
import phone from "../assets/phone.svg";
import { useState, useEffect } from "react";
import axios from "axios";

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
    <div>
      <img src={cw} alt="cw" />
      <div className="logo" key={index}>
        <p>info</p>
        <img src={man} alt="man" className="logo" />
        <img src={mail} alt="mail" className="logo" />
        <img src={growingman} alt="growing" className="logo" />
        <img src={map} alt="map" className="logo" />
        <img src={phone} alt="phone" className="logo" />
        <img src={padlock} alt="padlock" className="logo" />
        <button onClick={UserData}>NEW USER</button>
        <button>ADD USER</button>
      </div>
      <div>
        <img src={design} alt="design" />
      </div>
    </div>
  );
};

export default UserCard;
