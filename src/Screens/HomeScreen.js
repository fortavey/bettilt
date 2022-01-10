import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import THEME from "../data/colors";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainTextContainer}>
        <Text style={styles.mainText}>Portugal Futebol</Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate("List", { liga: "primeira" })}
        >
          <Text style={styles.itemText}>Primeira Liga</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate("List", { liga: "segunda" })}
        >
          <Text style={styles.itemText}>Liga Portugal 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemFull}>
          <Text style={styles.itemText}>Todos os resultados</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemFull}>
          <Text style={styles.itemText}>Novas partidas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: THEME.MAIN_COLOR,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mainTextContainer: {
    backgroundColor: THEME.YELLOW_COLOR,
    width: "90%",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    marginBottom: 30,
  },
  mainText: {
    fontSize: 30,
    color: THEME.LIGHT_COLOR,
  },
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 100,
    flexWrap: "wrap",
    padding: 20,
  },
  item: {
    backgroundColor: THEME.LIGHT_COLOR,
    width: "48%",
    height: 100,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    color: "#fff",
    fontSize: 22,
    textAlign: "center",
  },
  itemFull: {
    width: "100%",
    backgroundColor: THEME.LIGHT_COLOR,
    height: 100,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
});
