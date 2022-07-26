import React, { useContext } from "react";
import logo from "../assets/logo.png";
import { FaInstagram, FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { UserContext } from "../contexts/UserContext";

function Navbar() {
  const { user, setShowDrawer, showDrawer } = useContext(UserContext);
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
        {/* <p style={{ color: "white" }}>{user && user.info.name}</p> */}
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
              console.log(showDrawer);
              // localStorage.clear();
              // setUser(null);
            }}
          />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
