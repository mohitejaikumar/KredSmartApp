import { HomePage } from "@/components/HomePage";
import { Text, View } from "react-native";

export default function Index() {
  return (
    
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <HomePage></HomePage>
    </View>
  );
}
