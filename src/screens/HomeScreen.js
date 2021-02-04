import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hello Pixel!</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Page"
      />
      <Button
        onPress={() => navigation.navigate("List")}
        title="Go to List Page"
      />
      <Button
        onPress={() => navigation.navigate("Image")}
        title="Go to Image Page"
      />
      <Button
        onPress={() => navigation.navigate("Counter")}
        title="Go to Counter Page"
      />
      <Button
        onPress={() => navigation.navigate("Color")}
        title="Go to Color Page"
      />
      <Button
        onPress={() => navigation.navigate("Square")}
        title="Go to Square Page"
      />
       <Button
        onPress={() => navigation.navigate("Text")}
        title="Go to Text Page"
      />
      <Button
        onPress={() => navigation.navigate("Box")}
        title="Go to Box Page"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
