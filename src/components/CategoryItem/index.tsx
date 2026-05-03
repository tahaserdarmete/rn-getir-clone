import React from "react";
import {TouchableOpacity, Image, Text, Dimensions} from "react-native";
import {Category} from "../../models";
import {useNavigation, NavigationProp} from "@react-navigation/native";
import {RootStackParamList} from "../../navigator/HomeNavigator";

const {width} = Dimensions.get("window");

type Props = {
  item: Category;
};

export default function CategoryItem({item}: Props) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  if (!item || !item.src) {
    // Eğer item veya item.src yoksa, boş bir görünüm döndür veya placeholder göster
    return null;
    // Alternatif olarak bir placeholder image göstermek için aşağıdaki satırı kullanabilirsiniz:
    // return (
    //   <Image style={{width: width * 0.18, height: width * 0.18, borderRadius: 10}} source={require('path/to/placeholder.png')} />
    // );
  }
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("CategoryDetails", {category: item.name})
      }
      style={{
        width: width * 0.25,
        height: width * 0.24,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10,
      }}
    >
      <Image
        style={{width: width * 0.18, height: width * 0.18, borderRadius: 10}}
        source={{uri: item.src}}
      />
      <Text style={{fontSize: 12, color: "#616161", fontWeight: "500"}}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
}
