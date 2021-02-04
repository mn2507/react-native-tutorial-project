import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.view1Style} />
      <View style={styles.view2Style} />
      <View style={styles.view3Style} />
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: "black",
    // alignItems: 'center',
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  view1Style: {
    height: 50,
    width: 50,
    backgroundColor: "red",
  },
  view2Style: {
    height: 50,
    width: 50,
    backgroundColor: "green",  
    // marginTop: 50,
    // alignSelf: "flex-end",
    top: 50,
  },
  view3Style: {
    height: 50,
    width: 50,
    backgroundColor: "blue",
  },
});

export default BoxScreen;
