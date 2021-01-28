import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const phones = [
    { name: "Apple", model: "iPhone" },
    { name: "Google", model: "Pixel" },
    { name: "Oppo", model: "Reno" },
    { name: "Vivo", model: "X50" },
    { name: "Huawei", model: "P40" },
    { name: "Motorola", model: "RAZR" },
    { name: "HTC", model: "M9" },
    { name: "OnePlus", model: "Nord" },
    { name: "Samsung", model: "S21" },
  ];

  return (
    <FlatList
      keyExtractor={(mobile) => mobile.name}
      data={phones}
      renderItem={({ item }) => {
        //element === { item: { name: 'Apple' }, index:0 }
        //item === { name: 'Apple' }
        return (
          <Text style={styles.textStyle}>
            {item.name} - Model: {item.model}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
