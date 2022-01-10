import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import Match from "../components/Match";
import THEME from "../data/colors";
import TopHeader from "../components/TopHeader";

export default function ListScreen({ navigation, route }) {
  const [loader, setLoader] = useState(true);
  const [internetError, setInternetError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://bettilt182.com/wp-admin/admin-ajax.php?action=${route.params.liga}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoader(false);
      })
      .catch((err) => setInternetError(true));
  }, []);

  return (
    <View style={styles.mainContainer}>
      {loader && (
        <View style={styles.popup}>
          {internetError ? (
            <View>
              <Text style={{ color: "#fff" }}>Internet Connection Error</Text>
            </View>
          ) : (
            <Image
              style={styles.loader}
              source={require("../../assets/loader.gif")}
            />
          )}
        </View>
      )}
      <TopHeader navigation={navigation} />
      <View style={styles.topNavigation}>
        <TouchableOpacity
          style={styles.topNavigationItem}
          onPress={() => navigation.push("List", { liga: "primeira" })}
        >
          <Text style={styles.topNavigationItemText}>Primeira Liga</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.topNavigationItem}
          onPress={() => navigation.push("List", { liga: "segunda" })}
        >
          <Text style={styles.topNavigationItemText}>Liga Portugal 2</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.flatList}
        data={data}
        renderItem={({ item }) => (
          <Match list={item} liga={route.params.liga} />
        )}
        keyExtractor={(item) => item.team_1 + item.team_2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: THEME.MAIN_COLOR,
    flex: 1,
    paddingTop: 45,
    position: "relative",
  },
  popup: {
    position: "absolute",
    width: "100%",
    height: "100%",
    flex: 1,
    top: 0,
    left: 0,
    backgroundColor: THEME.MAIN_COLOR,
    zIndex: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  loader: {
    width: 50,
    height: 50,
  },
  topNavigation: {
    flexDirection: "row",
    paddingTop: 10,
  },
  topNavigationItem: {
    backgroundColor: THEME.YELLOW_COLOR,
    padding: 10,
    borderRadius: 20,
    margin: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  topNavigationItemText: {
    fontWeight: "700",
    color: THEME.LIGHT_COLOR,
  },
  flatList: {
    paddingLeft: 10,
    paddingRight: 10,
  },
});
