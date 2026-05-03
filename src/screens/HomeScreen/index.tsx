import React from "react";
import styles from "./styles";
import {ScrollView, View} from "react-native";
import HeaderMain from "../../components/HeaderMain/index";
import BannerCarousel from "../../components/BannerCarousel/index";
import MainCategories from "../../components/MainCategories/index";

function HomeScreen() {
  return (
    <ScrollView
      stickyHeaderIndices={[0]}
      style={{height: "100%", backgroundColor: "#f5f5f5"}}
    >
      <HeaderMain />
      <View style={{marginBottom: 16}}>
        <BannerCarousel />
      </View>
      <MainCategories />
    </ScrollView>
  );
}

export default HomeScreen;
