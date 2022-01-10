import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import THEME from "../data/colors";
import { Ionicons } from "@expo/vector-icons";

export default function Match({ list, liga }) {
  const [renderLiga, setRenderLiga] = useState("");
  useEffect(() => {
    switch (liga) {
      case "primeira":
        setRenderLiga("Primeira Liga");
        break;
      case "segunda":
        setRenderLiga("Liga Portugal 2");
        break;
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ color: "#fff" }}>{list.date}</Text>
        <Text style={{ color: "#fff" }}>Dia de jogo {list.tour} de 34</Text>
      </View>
      <View style={styles.liga}>
        <Ionicons name="ios-football-outline" size={24} color="#fff" />
        <Text style={{ color: "#fff", fontWeight: "700", paddingLeft: 10 }}>
          {renderLiga}
        </Text>
      </View>
      <View style={styles.team}>
        <Text style={styles.teamText}>{list.team_1}</Text>
        <Text style={styles.teamGoals}>{list.g1}</Text>
      </View>
      <View style={styles.team}>
        <Text style={styles.teamText}>{list.team_2}</Text>
        <Text style={styles.teamGoals}>{list.g2}</Text>
      </View>
      <View style={styles.line}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.LIGHT_COLOR,
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
  liga: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  team: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  teamText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
  },
  teamGoals: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "700",
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#4F5669",
  },
});
