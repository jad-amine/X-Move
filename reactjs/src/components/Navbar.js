import React, { useContext } from "react";
import logo from "../assets/logo.png";
import { FaInstagram, FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import { UserContext } from "../contexts/UserContext";

function Navbar() {
  const { user, setUser } = useContext(UserContext);
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
        <p style={{ color: "white" }}>{user && user.info.name}</p>
        <li>
          <FaFacebookSquare size={25} color="darkblue" />
        </li>
        <li>
          <FaInstagram size={25} color="tomato" />
        </li>
        <li>
          <FaTwitter size={25} color="blue" />
        </li>
        <li>
          <AiOutlineLogout
            cursor="pointer"
            size={25}
            color="red"
            onClick={() => {
              localStorage.clear();
              setUser(null);
            }}
          />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
