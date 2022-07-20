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
    <GiAmericanFootballBall size="3em" className="icon" />,
    <GiAmericanFootballBall size="3em" className="icon" />,
    <GiSoccerBall className="icon" size="3em" />,
    <GiTennisBall className="icon" size="3em" />,
    <FaSkiing className="icon" size="3em" />,
    <GiBasketballBall className="icon" size="3em" />,
    <FaChessKing className="icon" size="3em" />,
    <MdSurfing className="icon" size="3em" />,
    <BsBicycle className="icon" size="3em" />,
    <RiBilliardsFill className="icon" size="3em" />,
    <MdSailing className="icon" size="3em" />,
    <BiDumbbell className="icon" size="3em" />,
    <GiVolleyballBall className="icon" size="3em" />,
    <FaVolleyballBall className="icon" size="3em" />,
    <TbScubaMask className="icon" size="3em" />,
    <TbKayak className="icon" size="3em" />,
  ];
  useEffect(() => {
    const myTimeout = setTimeout(() => {
      setIcon(icons[Math.floor(Math.random() * icons.length)]);
    }, 300);
    return () => clearTimeout(myTimeout);
  });
  return <div style={{ marginLeft: 50, marginTop: 50 }}>{icon}</div>;
}
