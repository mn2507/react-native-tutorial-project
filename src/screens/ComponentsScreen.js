import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const name = "Muthu";

  return (
    <View>
      <Text style={styles.textStyle}>Getting started oh!</Text>
      <Text style={styles.introStyle}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  introStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
