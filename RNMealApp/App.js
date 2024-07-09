import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#27110a",
        },
        headerTintColor: "white",
        sceneContainerStyle: {
          backgroundColor: "#462d2d",
        },
        drawerContentStyle: { backgroundColor: "#27110a" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#27110a",
        drawerActiveBackgroundColor: "#bdbdbd",
      }}
    >
      <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
        title: "All Categories", drawerIcon: ({ color, size }) => <Ionicons name="fast-food" size={size} color={color} />,
      }} />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} options={{
       drawerIcon: ({ color, size }) => <Ionicons name="star" size={size} color={color} />,
      }} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#27110a",
            },
            headerTintColor: "white",
            contentStyle: {
              backgroundColor: "#462d2d",
            },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} options={{
            title: "Meal Details",
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
