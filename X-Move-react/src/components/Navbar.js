// Utilities
import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import logo from "../assets/logo.png";
import { FiMenu } from "react-icons/fi";
import { FaInstagram, FaFacebookSquare, FaTwitter } from "react-icons/fa";

function Navbar() {
  const { setShowDrawer } = useContext(UserContext);

  return (
    <div className="top-nav">
      <img
        className="to-nav-img"
        src={logo}
        height={100}
        width={150}
        alt="logo"
      />
      <ul>
        <li>
          <FaFacebookSquare size={25} color="white" />
        </li>
        <li>
          <FaInstagram size={25} color="white" />
        </li>
        <li>
          <FaTwitter size={25} color="white" />
        </li>
        <li>
          <FiMenu
            cursor="pointer"
            size={30}
            color="white"
            onClick={() => {
              setShowDrawer(true);
            }}
          />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
