import React, {useState, useEffect} from "react";
import {View, Text, ScrollView, ActivityIndicator} from "react-native";
import {Product} from "../../models";
import ImageCarousel from "../../components/ImageCarousel";
import DetailBox from "../../components/DetailBox";
import DetailProperty from "../../components/DetailProperty";
import CardButton from "../../components/CardButton";
import {useNavigation} from "@react-navigation/native";

function ProductDetails(props: {route: any}) {
  const [product, setProduct] = useState<Product>();
  const navigation = useNavigation();

  useEffect(() => {
    setProduct(props.route.params.product);

    navigation.getParent()?.setOptions({tabBarStyle: {display: "none"}});

    return () => {
      navigation.getParent()?.setOptions({tabBarStyle: {display: "flex"}});
    };
  }, []);

  if (!product) {
    return <ActivityIndicator color={"#5D3EBD"} />;
  }

  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1, backgroundColor: "#f5f5f5"}}>
        <ImageCarousel images={product.images} />
        <DetailBox
          price={product.fiyat}
          name={product.name}
          quantity={product.miktar}
        />
        <Text
          style={{
            paddingHorizontal: 10,
            paddingVertical: 13,
            color: "#808B99",
            fontWeight: "600",
            fontSize: 14,
          }}
        >
          Detaylar
        </Text>
        <DetailProperty />
      </ScrollView>
      <CardButton product={product} />
    </View>
  );
}

export default ProductDetails;
