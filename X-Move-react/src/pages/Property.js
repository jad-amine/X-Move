import React, { useContext, useState } from "react";
import API from "../api";
import Map from "../components/Map";
import BasicSelect from "../components/Select";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export default function Property() {
  const { user } = useContext(UserContext);
  const [name, setName] = useState(null);
  const [property, setProperty] = useState("");
  const [sport, setSport] = useState("");
  const [number, setNumber] = useState(user.info.property?.number);
  const [location, setLocation] = useState(user.info.property?.location);
  const [pictureURL, setPictureURL] = useState(user.info.property?.pictureURL);
  const [rentPerHour, setRentPerHour] = useState(
    user.info.property?.rentPerHour
  );
  const update = user.info.property ? true : false;
  const [updated, setUpdated] = useState();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (
      (!name ||
        !property ||
        !sport ||
        !number ||
        !rentPerHour ||
        !pictureURL) &&
      !update
    ) {
      alert("Please fill all the field !!");
      return;
    }
    try {
      const fieldInfo = {
        name,
        property,
        sport,
        number,
        rentPerHour,
        location,
        pictureURL,
      };
      await API.post(
        update ? "updatePropertyInfo/" : "addProperty/",
        fieldInfo,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setUpdated(true);
      navigate("/");
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
      setPictureURL(base64);
    };
    fileReader.readAsDataURL(fileToLoad);
  };

  return (
    <>
      <div className="property-container">
        <div className="property-form-header">Property Information</div>
        <form className="property-form">
          <p>Name: </p>
          {user.info.property?.name ? (
            <>
              <h1>{user.info.property.name}</h1>
              <hr />
              <p>Type: </p>
              <h1>{user.info.property.property}</h1>
              <hr />
              <p>Sport: </p>
              <h1>
                {user.info.property.sport.charAt(0).toUpperCase() +
                  user.info.property.sport.slice(1)}
              </h1>
            </>
          ) : (
            <>
              <input type="text" onChange={(e) => setName(e.target.value)} />
              <hr />
              <BasicSelect
                text={"Type"}
                value={property}
                setValue={setProperty}
              />
              {property === "Field" ? (
                <BasicSelect text={"Sport"} value={sport} setValue={setSport} />
              ) : (
                <BasicSelect
                  text={property}
                  value={sport}
                  setValue={setSport}
                />
              )}
            </>
          )}
          <hr />
          <div>
            <label>Phone Number: </label>
            <input
              value={number}
              property="number"
              placeholder="Number"
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div>
            <label>Rent ($) : </label>
            <input
              value={rentPerHour}
              property="number"
              placeholder="Rent/Hour"
              min={1}
              onChange={(e) => setRentPerHour(e.target.value)}
            />
          </div>
          <input accept="image/*" type="file" onChange={imgFilehandler} />
          <input type="button" value={"Location"} />
          <button onClick={handleClick}>{update ? "Update" : "Submit"}</button>
          {updated && <p>Updated</p>}
        </form>
        <Map setLocation={setLocation} location={location} />
      </div>
    </>
  );
}
