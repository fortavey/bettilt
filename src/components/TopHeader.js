import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function TopHeader({ navigation }) {
  return (
    <View style={styles.main}>
      <MaterialCommunityIcons
        name="home-outline"
        size={40}
        color="#fff"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#292F3F",
    height: 50,
    width: "100%",
    justifyContent: "center",
    paddingLeft: 10,
  },
});
