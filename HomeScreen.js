/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from "react-native";
import {
  Table,
  TableWrapper,
  Row,
  Cell,
  Rows,
  Col
} from "react-native-table-component";
const MayData = [
  50,
  13,
  56,
  44,
  10,
  91,
  15,
  30,
  24,
  5, //10
  7,
  13,
  23,
  36,
  24,
  46,
  15,
  35,
  65,
  74, //20
  23,
  85,
  20,
  46,
  32,
  12,
  11,
  23,
  12,
  8, //30
  56
];

const JuneData = [
  74, //20
  23,
  85,
  20,
  46,
  32,
  12,
  11,
  23,
  12,
  8, //30
  50,
  13,
  56,
  44,
  10,
  91,
  15,
  30,
  24,
  5, //10
  7,
  13,
  23,
  36,
  24,
  46,
  15,
  35,
  65
];

const JulyData = [
  5,
  85,
  3,
  54,
  56,
  45,
  36,
  15,
  25,
  14,
  78,
  65,
  95,
  78,
  63,
  25,
  45,
  36,
  25,
  21,
  23,
  85,
  20,
  46,
  32,
  12,
  11,
  23,
  12,
  8, //30
  56
];
export default class HomeScreen extends Component {
  element = val => (
    <TouchableOpacity onPress={() => this.testFunction(2)}>
      <View>
        <Text style={{ color: "black" }}>{val}</Text>
      </View>
    </TouchableOpacity>
  );

  state = {
    tableHead: ["SrNo", "First_Name", "Last_Name", "Avg Vatts"],
    tableData: [
      [
        "1",
        "Ashutosh",
        "Telang",
        this.element(
          "        " +
            (MayData.reduce((a, b) => a + b) / MayData.length).toFixed(2) +
            " vatts"
        )
      ],
      [
        "2",
        "Datta",
        "Sawant",
        this.element(
          "        " +
            (MayData.reduce((a, b) => a + b) / JuneData.length).toFixed(2) +
            " vatts"
        )
      ],
      [
        "3",
        "Sushant",
        "Sawant Sir",
        this.element(
          "        " +
            (MayData.reduce((a, b) => a + b) / JulyData.length).toFixed(2) +
            " vatts"
        )
      ],
      ["4", "Ninad", "Parab", "Cooking  Books"]
    ],
    tableTitle: ["Title", "Title2", "Title3", "Title4"],
    data: [
      {
        value: MayData.reduce((a, b) => a + b) / MayData.length,
        label: "May",
        monthdata: MayData
      },
      {
        value: JuneData.reduce((a, b) => a + b) / JuneData.length,
        label: "June",
        monthdata: JuneData
      },
      {
        value: JulyData.reduce((a, b) => a + b) / JulyData.length,
        label: "July",
        monthdata: JulyData
      }
    ],
    widthArr: [40, 85, 85, 120]
  };

  _alertIndex(val) {
    alert(`This is row ${val}`);
  }

  testFunction = index => {
    console.log(index);

    this.props.navigation.navigate("SecondScreen", {
      month: this.state.data[index].monthdata
      // visibler: index % 2 ? true : false
    });
  };

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <ScrollView
          //  horizontal={true}
          //   bouncesZoom={true}
          maximumZoomScale={2}
          minimumZoomScale={1}
        >
          <View>
            <Table borderStyle={{ borderColor: "#C1C0B9" }}>
              <Row
                data={state.tableHead}
                widthArr={state.widthArr}
                style={styles.header}
                textStyle={[styles.text, { color: "white" }]}
              />
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{ borderColor: "#C1C0B9" }}>
                {state.tableData.map((rowData, index) => (
                  <Row
                    key={index}
                    data={index === 3 ? null : rowData}
                    widthArr={state.widthArr}
                    style={[
                      styles.row,
                      index % 2 && { backgroundColor: "#F7F6E7" }
                    ]}
                    textStyle={styles.text}
                  />
                ))}
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  header: { height: 50, backgroundColor: "teal" },
  text: { textAlign: "center", fontWeight: "100", color: "black" },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: "#E7E6E1" },
  title: { flex: 1, backgroundColor: "#f6f8fa" }
});
