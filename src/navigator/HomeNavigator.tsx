import React, {useEffect, useState} from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {Dimensions, Text, Image, View, TouchableOpacity} from "react-native";
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import CategoryFilterScreen from "../screens/CategoryFilterScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import {Ionicons, Foundation} from "@expo/vector-icons";
import {getFocusedRouteNameFromRoute} from "@react-navigation/native";
import {connect} from "react-redux";
import * as actions from "../redux/actions/cartActions";
import {Product} from "../models";

const {width} = Dimensions.get("window");
const Stack = createStackNavigator();
const tabHiddenRoutes = ["ProductDetails", "CartScreen"];

function MyStack({
  navigation,
  route,
  cartItems,
  clearCart,
}: {
  navigation: any;
  route: any;
  cartItems: Product[];
  clearCart: () => void;
}) {
  const [totalPrice, setTotalPrice] = useState<number>(0);

  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);

    navigation.getParent()?.setOptions({
      tabBarStyle:
        routeName && tabHiddenRoutes.includes(routeName)
          ? {display: "none"} // gizle
          : {display: "flex"}, // göster
    });
  }, [navigation, route]);

  // Sepet toplamı
  useEffect(() => {
    const total = (cartItems || []).reduce(
      (sum, item) => sum + (item.product?.fiyat ?? 0) * (item.quantity ?? 1),
      0,
    );
    setTotalPrice(total);
  }, [cartItems]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerBackTitle: "",
        headerTintColor: "white",
        headerStyle: {backgroundColor: "#5C3EBC"},
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: () => (
            <Image
              resizeMode="contain"
              style={{width: 70, height: 30}}
              source={require("../../assets/getirlogo.png")}
            />
          ),
        }}
      />

      <Stack.Screen
        name="CategoryDetails"
        component={CategoryFilterScreen}
        options={({navigation}) => ({
          headerTitle: () => (
            <Text style={{fontWeight: "bold", fontSize: 15, color: "white"}}>
              Ürünler
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("CartScreen")}
              style={{
                width: width * 0.22,
                height: 33,
                backgroundColor: "white",
                marginRight: width * 0.03,
                borderRadius: 9,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                style={{width: 23, height: 23, marginLeft: 6}}
                source={require("../../assets/cart.png")}
              />
              <View style={{width: 5, height: 30, backgroundColor: "white"}} />
              <View
                style={{
                  flex: 1,
                  backgroundColor: "#F3EFFE",
                  height: 30,
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#5D3EBD",
                    fontWeight: "bold",
                    fontSize: 12,
                  }}
                >
                  {"\u20BA"}
                  {totalPrice.toFixed(2)}
                </Text>
              </View>
            </TouchableOpacity>
          ),
        })}
      />

      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={({navigation}) => ({
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{paddingLeft: 8}}
            >
              <Ionicons name="close" size={26} color="white" />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text style={{fontWeight: "bold", fontSize: 15, color: "white"}}>
              Ürün Detayı
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity style={{paddingRight: 10}}>
              <Foundation name="heart" size={26} color="#32177a" />
            </TouchableOpacity>
          ),
        })}
      />

      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={({navigation}) => ({
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{paddingLeft: 8}}
            >
              <Ionicons name="close" size={26} color="white" />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text style={{fontWeight: "bold", fontSize: 15, color: "white"}}>
              Sepetim
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => clearCart()}
              style={{paddingRight: 10}}
            >
              <Ionicons name="trash" size={24} color="white" />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

const mapStateToProps = (state) => ({
  cartItems: state.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(actions.clearCart()),
});

function HomeNavigator(props) {
  return <MyStack {...props} />;
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeNavigator);
