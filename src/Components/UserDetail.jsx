import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { theme } from "../Context";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import WheelBlack from "./WheelBlack.svg";
import WheelWhite from "./WheelWhite.svg";

const UserDetail = ({ darkMode }) => {
  const color = darkMode ? theme.dark : theme.light;
  const { username } = useParams();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {
    let result = 60;
    setLoading(true);
    const dataUrl = `https://randomuser.me/api/?results=${result}&seed=dev`;
    axios.get(dataUrl).then((response) => {
      const userData = response.data.results;
      setLoading(false);
      // eslint-disable-next-line
      setUser(userData.filter(function (user) {
          if (username === user.login.username) {
            return user;
          }
        })
      );
    });
  }, [username]);

  const navigate = useNavigate();
  const handleNavigate = (e) => {
    e.preventDefault();
    navigate("/users");
  };

  function switchStatement(a) {
    let b;
    // eslint-disable-next-line
    switch (a) {
      case 1:
        b = "January";
        break;
      case 2:
        b = "February";
        break;
      case 3:
        b = "March";
        break;
      case 4:
        b = "April";
        break;
      case 5:
        b = "May";
        break;
      case 6:
        b = "June";
        break;
      case 7:
        b = "July";
        break;
      case 8:
        b = "August";
        break;
      case 9:
        b = "September";
        break;
      case 10:
        b = "October";
        break;
      case 11:
        b = "November";
        break;
      case 12:
        b = "December";
        break;
    }
    return b;
  }
  return (
    <div
      className={`absolute top-[4rem] h-[calc(100vh_-_4rem)] w-screen bg-${color.background} z-10`}
    >
      {loading ? (
        <div className="flex justify-center h-1/2 mt-[25vh]">
          {!darkMode ? (
            <img src={WheelBlack} alt="Wheel" />
          ) : (
            <img src={WheelWhite} alt="Wheel" />
          )}
        </div>
      ) : (
        <div>
          {user.map((user) => (
            <div
              key={user.login.uuid}
              className="flex flex-col md:flex-row justify-between overflow-hidden mt-0 md:mt-0"
            >
              <div className="w-full md:w-1/2">
                <button
                  onClick={handleNavigate}
                  className="flex items-center p-2 hover:px-0"
                >
                  <AiOutlineArrowLeft className="mx-1 transition duration-500" /> Go back
                </button>
                <h1 className="flex justify-center mt-2 md:mt-6 text-3xl font-medium">
                  About Me
                </h1>
                <p className="mx-10 mt-4 mb-10 md:mb-4">
                  Hi there, thanks for checking up my profile, I must tell you,
                  it's really nice to have you here.
                  <br /> <br /> My name is {user.name.first} {user.name.last}, I
                  am living at No. {user.location.street.number},{" "}
                  {user.location.street.name}
                  {user.location.city}, {user.location.state}{" "}
                  {user.location.country}.
                  <br /> <br />I was born on{" "}
                  {switchStatement(Number(user.dob.date.slice(5, 7)))}{" "}
                  {user.dob.date.slice(8, 10)}, {user.dob.date.slice(0, 4)} in{" "}
                  {user.location.state} {user.location.country} and I am{" "}
                  {user.dob.age} years old. I opened this account in the year{" "}
                  {user.registered.date.slice(0, 4)} with the hope of connecting
                  with people like you 🥰
                  <br /> <br />
                  For the past {user.registered.age} years that I registered on
                  this platform, my friends love to call me{" "}
                  {user.login.username}. Let's connect and you'll definitely
                  find me interesting.
                  <br />
                  <br />
                  Do you have any message for me? Send me a mail via{" "}
                  {user.email} or you can call me directly on +{user.phone} or
                  even drop a WhatsApp message for me on wa.me/{user.cell}.
                  Would love to hear from you.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <div className="rounded-4xl">
                  <LazyLoadImage
                    effect="blur"
                    placeholderSrc={user.picture.thumbnail}
                    src={user.picture.large}
                    alt={user.name.first}
                    className="w-screen md:w-full h-auto md:h-[calc(100vh_-_5rem)] rounded-4xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserDetail;
