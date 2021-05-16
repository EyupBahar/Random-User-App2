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
  const [userCard, setUserCard] = useState([]);
  const [visible, setVisible] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const [currentData, setCurrentData] = useState({});
  const createUser = () => {
    if (userInfo.filter((user) => user.email === userCard.email).length > 0) {
      alert("You have already added...");
    } else {
      setUserInfo([
        ...userInfo, // önceki verileri tutnak için kullandık.
        {
          name: userCard?.name?.first,
          email: userCard?.email,
          phone: userCard?.phone,
          age: userCard?.dob?.age,
        },
      ]);
    }
    setVisible(true);
  };

  const userData = () => {
    axios.get("https://randomuser.me/api/").then((res) => {
      setUserCard(res.data.results[0]);
      setCurrentData({
        title: "name",
        info:
          res.data.results[0].name.first + " " + res.data.results[0].name.last,
      });
    });
  };
  useEffect(() => {
    userData();
  }, []);

  console.log(userInfo);
  return (
    <div className="main_container">
      <div className="cw">
        <img src={cw} alt="cw" className="cw-logo" />
      </div>
      <div className="Card_box">
        <div className="profile_box">
          <img
            src={userCard?.picture?.large}
            alt="pic"
            className="profile_photo"
          />
          <div className="info">
            <p>My {currentData.title} is</p>
            <h2>{currentData.info}</h2>
          </div>
          <div className="logo-container">
            <img
              onMouseOver={() =>
                setCurrentData({
                  title: "name",
                  info: userCard?.name?.first + " " + userCard?.name?.last,
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
                  info: userCard?.email,
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
                  info: userCard?.dob?.age,
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
                  info:
                    userCard?.location?.state +
                    " " +
                    userCard?.location?.country,
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
                  info: userCard?.phone,
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
                  info: userCard?.login?.password,
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
          {visible ? (
            <div className="table_container">
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
                {userInfo?.map((item, index) => (
                  <tr className="tableInfo" key={index}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.age}</td>
                  </tr>
                ))}
              </table>
            </div>
          ) : null}
        </div>
        <div className="footer_design">
          <img src={design} alt="design" className="design" />
        </div>
      </div>
    </div>
  );
};
export default UserCard;
