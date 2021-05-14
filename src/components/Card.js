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

function Card() {
  return (
    <div>
      <img src={cw} alt="cw" />
      <div className="logo">
        <img src={man} alt="man" />
        <img src={mail} alt="mail" />
        <img src={growingman} alt="growing" />
        <img src={map} alt="map" />
        <img src={phone} alt="phone" />
        <img src={padlock} alt="padlock" />
        <button>NEW USER</button>
        <button>ADD USER</button>
      </div>
      <div>
        <img src={design} alt="design" />
      </div>
    </div>
  );
}

export default Card;
