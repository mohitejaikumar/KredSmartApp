import { StyleSheet } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import ProfileIcon from "@/assets/icons/ProfileIcon";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import KredSmartIcon from "@/assets/icons/KredSmartIcon";

export default function Layout() {
  
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "white",
          height: 70,
          paddingTop: 10,
          paddingBottom: 10,
        },
        tabBarActiveTintColor: "#21A870",
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <ProfileIcon color={color} />,
          headerTitleStyle: {
            fontSize: 30,
            fontWeight: "bold",
          },
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: "bold",
          },
          tabBarLabel: "Pragya",
          headerTitle: (props) => <KredSmartIcon />,
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          title: "Scan and Pay",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="scan-helper"
              size={24}
              color={color}
            />
          ),
          headerTitleStyle: {
            fontSize: 24,
           
          },
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: "bold",
          },
          tabBarLabel: "Scan and Pay",
        }}
      />
      <Tabs.Screen
        name="card"
        options={{
          title: "Credit Card",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="cards-variant"
              size={24}
              color={color}
            />
          ),
          headerTitleStyle: {
            fontSize: 24,
            
          },
          tabBarLabel: "Your Card",
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: "bold",
          },
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({});
