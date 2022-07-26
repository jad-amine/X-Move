import React, { useState } from "react";
import API from "../api";
import Map from "../components/Map";
import BasicSelect from "../components/Select";

export default function Property({ user, setUser }) {
  const [field, setField] = useState(true);
  const [info, setInfo] = useState({});
  const [name, setName] = useState(null);
  const [type, setType] = useState(" ");
  const [sport, setSport] = useState(" ");
  const [number, setNumber] = useState(null);
  const [rentPerHour, setRentPerHour] = useState(null);
  const [location, setLocation] = useState(null);
  const [picture, setPicture] = useState(null);

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(info);
    if (
      !info.name ||
      !info.property ||
      !info.sport ||
      !info.number ||
      !info.rentPerHour ||
      !info.picture
    ) {
      alert("Please fill all the field !!");
      return;
    }
    try {
      const { data } = await API.post(
        "addProperty/",
        { info: info },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setUser({ info: { ...user.info, property: data }, token: user.token });
    } catch (error) {
      console.log(error);
    }
  };

  const imgFilehandler = (event) => {
    var fileSelected = event.target.files;
    var fileToLoad = fileSelected[0];
    var fileReader = new FileReader();
    var base64;
    fileReader.onload = function (fileLoadedEvent) {
      base64 = fileLoadedEvent.target.result;
      base64 = base64.split(",")[1];
      setPicture(base64);
    };
    fileReader.readAsDataURL(fileToLoad);
  };

  return (
    <>
      <div className="property-container">
        <div className="property-form-header">Property Information</div>
        <form className="property-form">
          <p>Property Name: </p>
          <input type="text" onChange={(e) => setName(e.target.value)} />
          <hr />
          <BasicSelect text={"Type"} value={type} setValue={setType} />
          {type === "Field" ? (
            <BasicSelect text={"Sport"} value={sport} setValue={setSport} />
          ) : (
            <BasicSelect text={type} value={sport} setValue={setSport} />
          )}
          <hr />
          <div>
            <label>Phone Number: </label>
            <input
              type="number"
              placeholder="Number"
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div>
            <label>Rent Per Hour price:</label>
            <input
              type="number"
              placeholder="Rent/Hour"
              min={1}
              onChange={(e) => setRentPerHour(e.target.value)}
            />
          </div>
          <input accept="image/*" type="file" onChange={imgFilehandler} />
          <input type="button" value={"Location"} />
          <button
            onClick={(e) => {
              e.preventDefault();
              console.log(type, sport);
            }}
          >
            Submit
          </button>
        </form>
        <Map location={location} setLocation={setLocation} />
      </div>
    </>
  );
}
