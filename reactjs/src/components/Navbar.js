import React from "react";
import logo from "../assets/logo.png";
import { FaInstagram, FaFacebookSquare, FaTwitter } from "react-icons/fa";

function Navbar() {
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
          <FaFacebookSquare size={25} color="darkblue" />
        </li>
        <li>
          <FaInstagram size={25} color="tomato" />
        </li>
        <li>
          <FaTwitter size={25} color="blue" />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
