import React from "react";
import RentEquipments from "./RentEquipments";
import RentField from "./RentField";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import StackNavigator from "./StackNavigator";
const Tab = createMaterialTopTabNavigator();

const Play = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{ title: "Fields" }}
        name="StackNavigator"
        component={StackNavigator}
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
