import React, { Component } from "react";
import {
  Modal,
  TouchableHighlight,
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from "react-native";
import { AppNavigator } from "./Navigation/AppNavigator";

class App extends Component {
  render() {
    return <AppNavigator />;
  }
}

export default App;
