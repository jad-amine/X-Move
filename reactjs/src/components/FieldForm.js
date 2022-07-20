import React, { useState } from "react";
import API from "../api";

export default function FieldForm({ user }) {
  const [field, setField] = useState(true);
  const [info, setInfo] = useState();

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
      : target === "equipment"
      ? setInfo({ ...info, equipment: value })
      : target === "number"
      ? setInfo({ ...info, number: value })
      : target === "rentPerHour"
      ? setInfo({ ...info, rentPerHour: value })
      : console.log(info);
  };

  const handleClick = async () => {
    if (
      !info.property || info.property === "Field"
        ? !info.sport
        : !info.equipment || !info.number || !info.rentPerHour
    ) {
      alert("Please fill all the field !!");
      return;
    }
    try {
      const { data } = await API.post("addProperty/", info, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      console.log("sent");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <select
        name="property"
        defaultValue={"Property type"}
        onChange={handleChange}
      >
        <option disabled={true}>Property type</option>
        <option value="Field">Field</option>
        <option value="Equipments">Equipments</option>
      </select>
      {field ? (
        <select name="sport" defaultValue={"Sport"} onChange={handleChange}>
          <option disabled={true}>Sport</option>
          <option value="football">Football</option>
          <option value="basketball">Basketball</option>
          <option value="tennis">Tennis</option>
          <option value="rugby">Rugby</option>
        </select>
      ) : (
        <select
          name="equipment"
          defaultValue={"Equipment"}
          onChange={handleChange}
          value={info.equipment}
        >
          <option disabled={true}>Equipment</option>
          <option value="bike">Bike</option>
          <option value="ski">Ski</option>
          <option value="snowboard">Snowboard</option>
          <option value="scubaDiving">Scuba Diving</option>
        </select>
      )}
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
    </div>
  );
}
