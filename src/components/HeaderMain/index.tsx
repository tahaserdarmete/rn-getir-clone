import React from "react";
import {View, Text, Image} from "react-native";
import "./styles";
import styles from "./styles";
import {Entypo} from "@expo/vector-icons";

function index() {
  return (
    <View style={styles.headerMain}>
      <View style={styles.headerOne}>
        <Image
          style={styles.image}
          source={{uri: "https://cdn.getir.com/misc/emoji/house.png"}}
        />
        <View style={styles.headerOneView}>
          <Text
            style={{
              fontWeight: "600",
              fontSize: 18,
              marginHorizontal: 6,
            }}
          >
            Ev
          </Text>
          <Text
            style={{
              fontWeight: "500",
              fontSize: 12,
              color: "#6e7480",
            }}
          >
            Kırklareli Lüleburgaz Arda Cad...
          </Text>
          <Entypo name="chevron-right" size={24} color="black" />
        </View>

        <View style={styles.headerTwo}>
          <Text style={{fontSize: 12, fontWeight: "bold", color: "#5d3ebd"}}>
            TVS
          </Text>
          <Text style={{fontSize: 20, fontWeight: "bold", color: "#5d3ebd"}}>
            13
            <Text style={{fontSize: 16}}>dk</Text>
          </Text>
        </View>
      </View>

      <View></View>
    </View>
  );
}

export default index;
