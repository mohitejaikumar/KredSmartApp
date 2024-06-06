import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

export default function ProfileIcon({ color }: { color: string }) {
  return (
    <Svg width="28" height="27" viewBox="0 0 28 27" fill="none">
      <Path
        d="M14 11.4446C16.4546 11.4446 18.4445 9.45471 18.4445 7.00011C18.4445 4.54551 16.4546 2.55566 14 2.55566C11.5454 2.55566 9.5556 4.54551 9.5556 7.00011C9.5556 9.45471 11.5454 11.4446 14 11.4446Z"
        fill={color}
      />
      <Path
        opacity="0.5"
        d="M22.8889 19.7773C22.8889 22.5385 22.8889 24.7773 14 24.7773C5.11115 24.7773 5.11115 22.5385 5.11115 19.7773C5.11115 17.0162 9.09115 14.7773 14 14.7773C18.9089 14.7773 22.8889 17.0162 22.8889 19.7773Z"
        fill={color}
      />
    </Svg>
  );
}
