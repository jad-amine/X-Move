// Utilities
import * as React from "react";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

export default function BasicSelect({ text, value, setValue }) {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // Properties types
  let list;
  if (text === "Type") {
    list = [
      ["Field", "Field"],
      ["Equipments", "Equipments"],
    ];
  } else if (text === "Sport") {
    list = [
      ["football", "Football"],
      ["basketball", "Basketball"],
      ["tennis", "Tennis"],
      ["rugby", "Rugby"],
    ];
  } else {
    list = [
      ["bike", "Bike"],
      ["ski", "Ski"],
      ["snowboard", "Snowboard"],
      ["scubaDiving", "Scuba Diving"],
      ["kayak", "Kayak"],
    ];
  }

  return (
    <Box sx={{ minWidth: 250 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          {text === "Type" ? "Type" : "Sport"}
        </InputLabel>
        <Select
          required
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Age"
          onChange={handleChange}
        >
          {list.map((item) => (
            <MenuItem key={item} value={item[0]}>
              {item[1]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
