import React, { Component } from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import HomeScreen from "../HomeScreen";
/* import DisplayScreen from "../src/Components/DisplayScreen";*/
import SingleChartScreen from "../SingleChartScreen";

export const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  SecondScreen: {
    screen: SingleChartScreen,
    navigationOptions: {
      title: "Svg Chart",

      titleStyle: {
        backgroundColor: "teal"
      }
    }
  }
});
