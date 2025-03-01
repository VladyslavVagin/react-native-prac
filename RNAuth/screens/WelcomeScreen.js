import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../context/auth-context";

function WelcomeScreen() {
  const authContext = useContext(AuthContext);
  const token = authContext.token;
  const [fetchedMessage, setFetchedMessage] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://expenses-tracker-3d9dc-default-rtdb.europe-west1.firebasedatabase.app/message.json?auth=${token}`
      )
      .then((response) => {
        setFetchedMessage(response.data);
      });
  }, [token]);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchedMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
