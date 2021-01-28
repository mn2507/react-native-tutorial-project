import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="iPhone 12"
        imageSource={require("../../assets/forest.jpg")}
        benchmark={3000}
      />
      <ImageDetail
        title="Google Pixel 5"
        imageSource={require("../../assets/beach.jpg")}
        benchmark={2000}
      />
      <ImageDetail
        title="Samsung Galaxy S21 Ultra"
        imageSource={require("../../assets/mountain.jpg")}
        benchmark={1000}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
