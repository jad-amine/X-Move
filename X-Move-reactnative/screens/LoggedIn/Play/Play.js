// Utilities
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// Screens
import StackNavigator from "./StackNavigator";
import RentEquipments from "./RentEquipments";

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
