import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = ({imageSource, title, benchmark}) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Benchmark - {benchmark}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
