import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 46,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4, // Android only shadow
    shadowColor: "black", // iOS only shadow
    shadowOffset: { width: 0, height: 2 }, // iOS only shadow
    shadowRadius: 6, // iOS only shadow
    shadowOpacity: 0.25, // iOS only shadow
  },
});
