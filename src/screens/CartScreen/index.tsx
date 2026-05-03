import React, {useEffect, useMemo} from "react";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import {connect} from "react-redux";
import {RootState} from "../../redux/store";
import {Product} from "../../models";
import {useNavigation} from "@react-navigation/native";
import CartItem from "../../components/CartItem";
import ProductItem from "../../components/ProductItem";
import productsGetir from "../../../assets/productsGetir";

const {height} = Dimensions.get("window");

type CartItemType = {product: Product; quantity: number};

function CartScreen({
  cartItems,
  route,
}: {
  cartItems: CartItemType[];
  route: any;
}) {
  const navigation = useNavigation();

  // Tab bar gizle
  useEffect(() => {
    navigation.getParent()?.setOptions({tabBarStyle: {display: "none"}});
    return () => {
      navigation.getParent()?.setOptions({tabBarStyle: {display: "flex"}});
    };
  }, []);

  const message = route?.params?.message ?? "";

  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => {
      return total + item.product.fiyat * item.quantity;
    }, 0);
  }, [cartItems]);

  return (
    <View style={{flex: 1, backgroundColor: "#F5F5F5"}}>
      <ScrollView style={{flex: 1}}>
        <FlatList
          data={cartItems}
          renderItem={({item}) => (
            <CartItem product={item} quantity={item.quantity} />
          )}
          scrollEnabled={false}
        />

        <Text
          style={{
            padding: 15,
            fontWeight: "bold",
            color: "#5D3EBD",
          }}
        >
          Önerilen Ürünler
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{backgroundColor: "white", paddingVertical: 10}}
        >
          {productsGetir.map((item) => (
            <ProductItem key={item.id} item={item} />
          ))}
        </ScrollView>
      </ScrollView>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          height: height * 0.12,
          width: "100%",
          backgroundColor: "#f8f8f8",
          paddingHorizontal: "4%",
          position: "absolute",
          bottom: 0,
        }}
      >
        <TouchableOpacity
          style={{
            flex: 3,
            borderBottomLeftRadius: 8,
            borderTopLeftRadius: 8,
            backgroundColor: "#5D3EBD",
            height: height * 0.06,
            justifyContent: "center",
            alignItems: "center",
            marginTop: -10,
          }}
        >
          <Text style={{color: "white", fontSize: 15, fontWeight: "bold"}}>
            Devam
          </Text>
        </TouchableOpacity>

        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            height: height * 0.06,
            marginTop: -10,
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
          }}
        >
          <Text
            style={{
              color: "#5D3EBD",
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            {"\u20BA"}
            {totalPrice.toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
}

const mapStateToProps = (state: RootState) => ({
  cartItems: state.cartItems,
});

export default connect(mapStateToProps)(CartScreen);
