import React, { useContext } from "react";
import logo from "../assets/logo1.png";
import { FaInstagram, FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { ApplicationContext } from "../contexts/ApplicationContext";
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
          height={80}
          width={120}
          alt="logo"
        />
      </div>
      <ul>
        <li>
          <FaFacebookSquare size={30} color="#444" />
        </li>
        <li>
          <FaInstagram size={30} color="#444" />
        </li>
        <li>
          <FaTwitter size={30} color="#444" />
        </li>
        <li></li>
      </ul>
    </div>
  );
}

export default Navbar;
