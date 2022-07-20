import React, { useState } from "react";
import API from "../api";

export default function FieldForm({ user, setUser }) {
  const [field, setField] = useState(true);
  const [info, setInfo] = useState({});

  const handleChange = (e) => {
    let value = e.target.value;
    let target = e.target.name;
    if (target === "property") {
      value === "Field" ? setField(true) : setField(false);
    }
    target === "property"
      ? setInfo({ property: value })
      : target === "sport"
      ? setInfo({ ...info, sport: value })
      : target === "number"
      ? setInfo({ ...info, number: value })
      : target === "rentPerHour"
      ? setInfo({ ...info, rentPerHour: value })
      : console.log(info);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (!info.property || !info.sport || !info.number || !info.rentPerHour) {
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

  return (
    <div>
      <form>
        <select
          name="property"
          defaultValue={"Property type"}
          onChange={handleChange}
        >
          <option disabled={true}>Property type</option>
          <option value="Field">Field</option>
          <option value="Equipments">Equipments</option>
        </select>
        <select name="sport" defaultValue={"Sport"} onChange={handleChange}>
          {field ? (
            <>
              <option disabled={true}>Sport</option>
              <option value="football">Football</option>
              <option value="basketball">Basketball</option>
              <option value="tennis">Tennis</option>
              <option value="rugby">Rugby</option>
            </>
          ) : (
            <>
              <option disabled={true}>Sport</option>
              <option value="bike">Bike</option>
              <option value="ski">Ski</option>
              <option value="snowboard">Snowboard</option>
              <option value="scubaDiving">Scuba Diving</option>
            </>
          )}
        </select>
        <input
          type="number"
          name="number"
          placeholder="Number"
          onChange={handleChange}
        />
        <input
          type="number"
          name="rentPerHour"
          placeholder="Rent/Hour"
          min={1}
          onChange={handleChange}
        />
        <input type="button" value={"Location"} />
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}
