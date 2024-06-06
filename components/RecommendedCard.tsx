import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScreenWidth } from "react-native-elements/dist/helpers";
import Icon from "react-native-vector-icons/AntDesign";
import CardWrapper from "./CardWrapper";
import { Divider } from "react-native-elements";
import AtmImage from "@/assets/images/atm3.jpg";
import { CustomCardImage } from "./CustomImage";
import { formatPrice } from "@/helpers/priceFormat";
import { Montserrat_700Bold, useFonts } from "@expo-google-fonts/montserrat";

export default function RecommendedCard() {
  let [fontsLoaded] = useFonts({ Montserrat_700Bold });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          style={{
            fontWeight: "700",
            fontSize: 23,
            lineHeight: 24,
            color: "#040C20",
            fontFamily: "Montserrat_700Bold",
          }}>
          Credit Card for you
        </Text>
        <View style={styles.seeAllContainer}>
          <Text
            style={{
              fontWeight: "semibold",
              fontSize: 18,
              lineHeight: 20,
              color: "#040C20",
              fontFamily: "Montserrat_700Bold",
            }}>
            See all
          </Text>
          <Icon color="green" name="right" size={20} />
        </View>
      </View>
      <CardWrapper>
        <View style={{ flexDirection: "row", gap: 12 }}>
          <CustomCardImage
            imageURL={AtmImage}
            width={160}
            height={100}
            borderRadius={10}
          />
          <View style={{ justifyContent: "space-evenly", gap: 20 }}>
            <Text style={{ fontWeight: "bold" }}>RECOMMENDED</Text>
            <View>
              <Text
                style={{ fontWeight: "bold", color: "black", fontSize: 15 }}>
                Axis Samsung
              </Text>
              <Text
                style={{ fontWeight: "bold", color: "black", fontSize: 15 }}>
                Credit Card
              </Text>
            </View>
          </View>
        </View>
        <Divider style={{ marginVertical: 10 }} />
        <View style={[styles.rowflex]}>
          <Text
            style={{
              fontFamily: "Montserrat_700Bold",
              fontSize: 18,
              fontWeight: "600",
            }}>
            Save upto
          </Text>
          <View style={styles.rowflex}>
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>
              {formatPrice.format(4500).split(".")[0]}
            </Text>
            <Text>/year</Text>
          </View>
        </View>
        <Divider style={{ marginVertical: 10 }} />
        <View style={[styles.rowflex]}>
          <Text
            style={{
              fontFamily: "Montserrat_700Bold",
              fontSize: 18,
              fontWeight: "600",
            }}>
            Best for{" "}
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat_700Bold",
              fontSize: 15,
              fontWeight: "semibold",
            }}>
            Electronics & household
          </Text>
        </View>
      </CardWrapper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: ScreenWidth,
  },
  header: {
    marginVertical: 20,
    paddingHorizontal: 18,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  seeAllContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  rowflex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
