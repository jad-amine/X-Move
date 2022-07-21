import React from "react";
import RentEquipments from "../../components/RentEquipments";
import RentField from "../../components/RentField";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const Tab = createMaterialTopTabNavigator();

const Play = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{ title: "Fields" }}
        name="RentField"
        component={RentField}
      />
      <Tab.Screen
        options={{ title: "Equipments" }}
        name="RentEquipments"
        component={RentEquipments}
      />
    </Tab.Navigator>
  );
};

export default Play;
