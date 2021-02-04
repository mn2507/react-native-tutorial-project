import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.text1Style}>Child #1</Text>
      <Text style={styles.text2Style}>Child #2</Text>
      <Text style={styles.text3Style}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    // alignItems: 'center',
    height: 200,
    flexDirection: 'column',
    // justifyContent: "center"
  },
  text1Style: {
    borderWidth: 3,
    borderColor: "red",
    flex: 1,
  },
  text2Style: {
    borderWidth: 3,
    borderColor: "red",
    // flex: 2
    alignSelf: "center",
    position: 'absolute',
    top:0,
    left:80,
    bottom:0
  },
  text3Style: {
    borderWidth: 3,
    borderColor: "red",
    flex: 1,
    /*position: 'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0 
    === ...StyleSheet.absoluteFillObject
    */
  },
});

export default BoxScreen;
