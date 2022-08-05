import React, { useEffect, useState } from "react";
import { FaSkiing, FaChessKing, FaVolleyballBall } from "react-icons/fa";
import {
  GiBasketballBall,
  GiAmericanFootballBall,
  GiSoccerBall,
  GiTennisBall,
} from "react-icons/gi";
import { MdSurfing, MdSailing } from "react-icons/md";
import { BsBicycle } from "react-icons/bs";
import { RiBilliardsFill } from "react-icons/ri";
import { GiVolleyballBall } from "react-icons/gi";
import { BiDumbbell } from "react-icons/bi";
import { TbScubaMask, TbKayak } from "react-icons/tb";

export default function Loading() {
  const [icon, setIcon] = useState(<GiAmericanFootballBall />);
  const icons = [
    <GiAmericanFootballBall size="7em" className="icon" />,
    <GiSoccerBall className="icon" size="7em" />,
    <GiTennisBall className="icon" size="7em" />,
    <FaSkiing className="icon" size="7em" />,
    <GiBasketballBall className="icon" size="7em" />,
    <FaChessKing className="icon" size="7em" />,
    <FaChessKing className="icon" size="7em" />,
    <MdSurfing className="icon" size="7em" />,
    <BsBicycle className="icon" size="7em" />,
    <RiBilliardsFill className="icon" size="7em" />,
    <MdSailing className="icon" size="7em" />,
    <BiDumbbell className="icon" size="7em" />,
    <GiVolleyballBall className="icon" size="7em" />,
    <FaVolleyballBall className="icon" size="7em" />,
    <TbScubaMask className="icon" size="7em" />,
    <TbKayak className="icon" size="7em" />,
    <TbKayak className="icon" size="7em" />,
  ];
  useEffect(() => {
    const myTimeout = setTimeout(() => {
      setIcon(icons[Math.floor(Math.random() * icons.length)]);
    }, 400);
    return () => clearTimeout(myTimeout);
  });
  return <div className="loading-screen">{icon}</div>;
}
