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
  const [userCard, setUserCard] = useState();
  const [visible, setVisible] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const createUser = () => {
    setUserInfo([
      ...userInfo,
      {
        name: userCard?.name?.first,
        email: userCard?.email,
        phone: userCard?.phone,
        age: userCard?.dob?.age,
      },
    ]);
    setVisible(true);
  };

  const userData = () => {
    axios.get("https://randomuser.me/api/").then((res) => {
      setUserCard(res.data.results);
    });
  };
  useEffect(() => {
    userData();
  }, []);
  const [currentData, setCurrentData] = useState({
    title: "name",
    info: "Omer Faruk",
  });

  return (
    <div className="main_container">
      <div className="cw">
        <img src={cw} alt="cw" className="cw-logo" />
      </div>
      {userCard?.map((user, index) => (
        <div className="Card_box" key={index}>
          <div className="profile_box">
            <img src={user.picture.large} alt="pic" className="profile_photo" />
            <div className="info">
              <p>My {currentData.title} is</p>
              <h2>{currentData.info}</h2>
            </div>
            <div className="logo-container">
              <img
                onMouseOver={() =>
                  setCurrentData({
                    title: "name",
                    info: user.name.first + " " + user.name.last,
                  })
                }
                src={man}
                alt="man"
                className="logo"
              />
              <img
                onMouseOver={() =>
                  setCurrentData({
                    title: "email",
                    info: user.email,
                  })
                }
                src={mail}
                alt="mail"
                className="logo"
              />
              <img
                onMouseOver={() =>
                  setCurrentData({
                    title: "age",
                    info: user.dob.age,
                  })
                }
                src={growingman}
                alt="growing"
                className="logo"
              />
              <img
                onMouseOver={() =>
                  setCurrentData({
                    title: "adress",
                    info: user.location.state + " " + user.location.country,
                  })
                }
                src={map}
                alt="map"
                className="logo"
              />
              <img
                onMouseOver={() =>
                  setCurrentData({
                    title: "phone number",
                    info: user.phone,
                  })
                }
                src={phone}
                alt="phone"
                className="logo"
              />
              <img
                onMouseOver={() =>
                  setCurrentData({
                    title: "password",
                    info: user.login.password,
                  })
                }
                src={padlock}
                alt="padlock"
                className="logo"
              />
            </div>
            <div className="btn-container">
              <button onClick={userData}>NEW USER</button>
              <button onClick={createUser}>ADD USER</button>
            </div>
          </div>
          {visible ? (
            <div>
              <table>
                <colgroup>
                  <col span="1" style={{ width: "25%" }}></col>
                  <col span="1" style={{ width: "25%" }}></col>
                  <col span="1" style={{ width: "25%" }}></col>
                  <col span="1" style={{ width: "25%" }}></col>
                </colgroup>
                <tr className="tableHeader">
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Age</th>
                </tr>
                {userInfo?.map((item) => (
                  <tr className="tableInfo">
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.age}</td>
                  </tr>
                ))}
              </table>
            </div>
          ) : null}
          <div className="footer_design">
            <img src={design} alt="design" className="design" />
          </div>
        </div>
      ))}
    </div>
  );
};
export default UserCard;
