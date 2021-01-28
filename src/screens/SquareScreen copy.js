import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 30;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (warna, tukar) => {
    // warna === 'red','green','blue'
    // tukar === +COLOR_INCREMENT, -COLOR_INCREMENT

    switch (warna) {
      case "red":
        // if (warna === "red")
        red + tukar > 255 || red + tukar < 0 ? null : setRed(red + tukar);
        return;
      /* if (red + tukar > 255 || red + tukar < 0) {
          return;
        } else {
          setRed(red + tukar);
        }
        */
      case "green":
        green + tukar > 255 || green + tukar < 0
          ? null
          : setGreen(green + tukar);
        return;
      case "blue":
        blue + tukar > 255 || blue + tukar < 0 ? null : setBlue(blue + tukar);
        return;
      default:
        return;
    }
  };

  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor("red", COLOR_INCREMENT)}
        onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setColor("blue", COLOR_INCREMENT)}
        onDecrease={() => setColor("blue", -1 * COLOR_INCREMENT)}
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => setColor("green", COLOR_INCREMENT)}
        onDecrease={() => setColor("green", -1 * COLOR_INCREMENT)}
        color="Green"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
