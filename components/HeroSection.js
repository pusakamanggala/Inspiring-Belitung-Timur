import React from "react";
import { Image, View, Text } from "react-native";

const HeroSection = () => {
  return (
    <View style={{}}>
      <Image style={{ width: "100%" }} source={require("../img/Banner.png")} />
      <View style={{ padding: 17, position: "absolute", bottom: 0 }}>
        <Text style={{ color: "white", fontWeight: "400" }}>Wisata Air</Text>
        <Text style={{ fontSize: 30, color: "white" }}>Pulau Bukulimau Underwater</Text>
      </View>
    </View>
  );
};

export default HeroSection;
