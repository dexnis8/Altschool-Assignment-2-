import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { ThemeContext } from "../Context";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Footer from "./Footer";
import { Link, Outlet } from "react-router-dom";
import WheelBlack from "./WheelBlack.svg";
import WheelWhite from "./WheelWhite.svg";

const Skills = ({ darkMode }) => {
  const theme = useContext(ThemeContext);
  const color = darkMode ? theme.dark : theme.light;
  const PER_PAGE = 12;
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [total, setTotal] = useState(null);

  useEffect(() => {
    let results = 60;
    const skip = page * PER_PAGE - PER_PAGE;
    const dataUrl = `https://randomuser.me/api/?results=${results}&seed=dev`;
    axios.get(dataUrl).then((response) => {
      setLoading(false);
      const userData = response.data.results;
      setUsers(userData?.slice(skip, skip + PER_PAGE));
      setTotal(userData.length);
    });
  }, [page]);
  let pages = Math.ceil(total / PER_PAGE);

  return (
    <div
      className={`h-[calc(100vh_-_4rem)] overflow-y-auto text-${color.foreground} bg-${color.background}`}
    >
      <div className=" mt-20 md:mt-0">
        <Outlet />
        <div
          className={`mb-6 text-[${color.foreground}] bg-[${color.background}]`}
        >
          <h1
            className={`flex justify-center mt-6 text-3xl font-medium text-[${color.foreground}] bg-[${color.background}]`}
          >
            Users
          </h1>
          <h3 className="mx-4 md:mx-20 text-center">
            These are the registered users on our platform
          </h3>
        </div>
        <div className="">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 bg-[#ffffff20] backdrop-blur items-center p-4">
            {loading ? (
              <div className="flex justify-center w-screen h-1/2 mt-[20vh] mb-[20vh]">
              {!darkMode ? (
                <img src={WheelBlack} alt="Wheel" />
              ) : (
                <img src={WheelWhite} alt="Wheel" />
              )}
            </div>
            ) : (
              users?.map((user) => (
                <div
                  key={user.login.uuid}
                  className={`bg-[${color.foreground}] text-[${color.background}] flex flex-col items-center p-4 rounded shadow-md border`}
                >
                  <div className="">
                    <LazyLoadImage
                      effect="blur"
                      placeholderSrc={user.picture.thumbnail}
                      src={user.picture.large}
                      alt={user.name.first}
                      className="rounded-full w-24 h-24"
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <h2>
                      {user
                        ? `${user.name.title} ${user.name.first} ${user.name.last}`
                        : "Unknown User"}
                    </h2>
                    <p className="font-thin">
                      {user ? `@${user.login.username}` : "user@user.com"}
                    </p>
                    <p
                      className={`font-thin text-sm my-1 text-[${color.foreground}] opacity-70`}
                    >
                      {user.location.country}
                    </p>
                    <Link
                      to={user.login.username}
                      className="border w-full text-center rounded"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="flex justify-center">
            <div className="p-2">
              <button
                className={`w-fit px-1 mx-1 rounded border ${
                  page <= 1 ? "opacity-50" : ""
                }`}
                aria-disabled={page <= 1}
                disabled={page <= 1}
                onClick={() => setPage((prev) => prev - 1)}
              >
                prev
              </button>
              {Array.from({ length: pages }, (_, index) => index + 1).map(
                (button) => (
                  <button
                    className="w-7 rounded border mx-1"
                    onClick={() => setPage(button)}
                  >
                    {button}
                  </button>
                )
              )}
              <button
                className={`w-fit px-1 mx-1 rounded border ${
                  page >= pages ? "opacity-50" : ""
                }`}
                aria-disabled={page >= pages}
                disabled={page >= pages}
                onClick={() => setPage((prev) => prev + 1)}
              >
                next
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Skills;
