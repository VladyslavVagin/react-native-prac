// @ts-nocheck
import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 450) {
    imageSize = 200;
  }

  if (height < 450) {
    imageSize = 100;
  }

  let imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            source={require("../assets/images/success.png")}
            style={styles.image}
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.higlight}>{roundsNumber}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.higlight}>{userNumber}</Text>
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  higlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
