import React, { useContext } from "react";
import logo from "../assets/logo1.png";
import { FaInstagram, FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { ApplicationContext } from "../contexts/applicationContext";
// import { UserContext } from "../contexts/UserContext";

function Navbar() {
  const { setShowDrawer } = useContext(ApplicationContext);
  return (
    <div className="top-nav">
      <div className="hamburger-menu">
        <FiMenu
          cursor="pointer"
          size={30}
          color="black"
          onClick={() => {
            setShowDrawer(true);
          }}
        />
        <img
          className="to-nav-img"
          src={logo}
          height={60}
          width={90}
          alt="logo"
        />
      </div>
      <ul>
        <li>
          <FaFacebookSquare size={25} color="black" />
        </li>
        <li>
          <FaInstagram size={25} color="black" />
        </li>
        <li>
          <FaTwitter size={25} color="black" />
        </li>
        <li></li>
      </ul>
    </div>
  );
}

export default Navbar;
