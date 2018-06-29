import React, { Component } from "react";
import { Text, View, ScrollView, YellowBox } from "react-native";
import Svg, { Circle, G, Rect } from "react-native-svg";
import {
  StackedAreaChart,
  BarChart,
  Grid,
  Line,
  AreaChart,
  LineChart,
  XAxis,
  YAxis
} from "react-native-svg-charts";
import * as shape from "d3-shape";
import * as scale from "d3-scale";
YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);
class SingleChartScreen extends Component {
  state = {
    consumedElect: null,
    consumedDated: null
  };

  render() {
    const { navigation } = this.props;
    const pmd = navigation.getParam("month", "cccsd");
    const visibler = navigation.getParam("visibler", "cccsd");

    /*

      <Circle
            onPress={() => alert(value)}
            key={index}
            cx={x(index)}
            cy={y(value)}
            r={7}
            stroke={"rgb(134, 65, 244)"}
            fill={"white"}
          />

*/

    renderContent = () => (
      <View style={{ flexDirection: "row" }}>
        <YAxis
          data={pmd}
          style={{ marginBottom: 5, margin: 5 }}
          contentInset={{ top: 30, bottom: 30 }}
          svg={{ fontSize: 10, fill: "grey" }}
        />
        <View style={{ flex: 1, width: 700 }}>
          <AreaChart
            style={{ height: 200 }}
            data={pmd}
            //  yAccessor={({ item }) => item.value}
            contentInset={{ top: 30, bottom: 30 }}
            curve={shape.curveNatural}
            svg={{ fill: "rgba(134, 65, 244, 0.5)" }}
          >
            <Grid />
          </AreaChart>

          <XAxis
            data={pmd}
            yAccessor={({ index }) => index}
            scale={scale.scaleBand}
            contentInset={{ top: 10, bottom: 10 }}
            spacing={0.2}
            formatLabel={(_, index) => {
              console.log(
                "condition",
                index % 2 && index != 30 ? null : index + 1
              );
              console.log("index", index);
              if (visibler) {
                return index % 2 && index != 29 ? null : index + 1;
              }

              return index % 2 && index != 30 ? null : index + 1;
            }}
          />
        </View>
      </View>
    );
    const Decorator = ({ x, y, data }) => {
      console.log(x, y, data, "ssss");
      return data.map((value, index) => {
        console.log(value, "sssss");
        return (
          <Circle
            onPress={() => {
              this.setState({ consumedElect: value, consumedDated: index + 1 });
            }}
            key={index}
            cx={x(index)}
            cy={y(value)}
            r={8}
            strokeWidth={3}
            stroke={"rgb(134, 65, 244)"}
            fill={"white"}
          />
        );
      });
    };
    renderContentTwo = () => (
      <View style={{ width: 700, flex: 1 }}>
        <AreaChart
          style={{ height: 200 }}
          data={pmd}
          yAccessor={({ item }) => {
            return item;
          }}
          svg={{
            stroke: "rgb(134, 65, 244)",
            strokeWidth: 2
          }}
          contentInset={{ top: 20, bottom: 30 }}
        >
          <Grid />
          <Decorator />
        </AreaChart>
        <XAxis
          data={pmd}
          yAccessor={({ index }) => index}
          scale={scale.scaleBand}
          style={{ paddingLeft: -5 }}
          contentInset={{ top: 10, bottom: 10 }}
          spacing={0.2}
          formatLabel={(_, index) => {
            if (visibler) {
              return index % 2 && index != 29 ? null : index + 1;
            }

            return index % 2 && index != 30 ? null : index + 1;
          }}
        />
      </View>
    );

    renderBoard = () => {
      return this.state.consumedElect ? (
        <Text style={{ fontSize: 25, color: "black" }}>
          Your Consumed data is
          {"\n" + "   " + this.state.consumedElect} Vatts , Dated ->{" "}
          {this.state.consumedDated}
        </Text>
      ) : (
        <Text style={{ fontSize: 20, color: "black" }}>
          Point Any Circle To Get Readings
        </Text>
      );
    };

    return (
      <View>
        <View style={{ flexDirection: "row" }}>
          <YAxis
            data={pmd}
            yAccessor={({ item }) => {
              return item;
            }}
            formatLabel={(_, index) => {
              return _;
            }}
            style={{ marginRight: 5, marginLeft: 5 }}
            contentInset={{ top: 30, bottom: 30 }}
            svg={{ fontSize: 10, fill: "teal", fontWeight: "bold" }}
          />
          <ScrollView horizontal={true} style={{ margin: 7 }}>
            {renderContentTwo()}
          </ScrollView>
        </View>
        <View
          marginTop={120}
          margin={20}
          alignItems="center"
          justifyContent="center"
        >
          {renderBoard()}
        </View>
      </View>
    );
  }
}

export default SingleChartScreen;
