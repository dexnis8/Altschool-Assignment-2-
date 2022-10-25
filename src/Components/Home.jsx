import React, { useContext } from "react";
// import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaWhatsapp,
// } from "react-icons/fa";
import { ThemeContext } from "../Context";

const Home = ({darkMode}) => {
  const theme = useContext(ThemeContext)
  const color = darkMode? theme.dark : theme.light;
  console.log(color)
  return (
    <section className={`flex bg-${color.background} h-[calc(100vh_-_4rem)] text-${color.foreground} transition duration-500`}>
      <div className="my-auto w-full">
        <div className="w-full h-[60vh] text-center flex justify-center items-end px-8">
        {/* <div className=""><iframe src="https://gifer.com/embed/79qS" className="h-[50vh] md:h-[60vh] w-[95vw] md:w-[60vw]" frameBorder="0" allowFullScreen></iframe></div> */}
          <img src={darkMode? `images/connectWhite.svg`: `images/connectBlack.svg`} alt="Connect" className="h-[50vh]"/>
        </div>
        <div className="h-[20vh]">
          <h1 className="text-2xl font-bold pt-4 pb-1 text-center">Connectify</h1>
          <h3 className="mx-4 md:mx-20 text-center">Connect and make new friends with people across the globe</h3>
        </div>
      </div>
      
    </section>
  );
};

export default Home;
