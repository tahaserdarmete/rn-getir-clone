import {
  View,
  Dimensions,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {Product} from "../../models";
import {connect} from "react-redux";
import * as actions from "../../redux/actions/cartActions";

const {width, height} = Dimensions.get("window");

type CartItemProps = {
  product: {product: Product; quantity: number};
  removeFromCart: (product: Product) => void;
  increaseQuantity: (product: Product) => void;
};

function CartItem({product, removeFromCart, increaseQuantity}: CartItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        {/* Product Info */}
        <View style={{flexDirection: "row", alignItems: "center"}}>
          <Image style={styles.image} source={{uri: product.product.image}} />

          <View style={{marginLeft: 8}}>
            <Text style={styles.name}>{product.product.name}</Text>
            <Text style={styles.miktar}>{product.product.miktar}</Text>

            {/* Fiyat * Adet */}
            <Text style={styles.price}>
              <Text>{"\u20BA"}</Text>
              {(product.product.fiyat * product.quantity).toFixed(2)}
            </Text>
          </View>
        </View>

        {/* Plus & Minus */}

        <View style={styles.counterContainer}>
          <TouchableOpacity
            onPress={() => removeFromCart(product.product)}
            style={styles.button}
          >
            <Text style={styles.minusPlus}>-</Text>
          </TouchableOpacity>

          <View style={styles.quantityBox}>
            <Text style={styles.quantityText}>{product.quantity}</Text>
          </View>

          <TouchableOpacity
            onPress={() => increaseQuantity(product.product)}
            style={styles.button}
          >
            <Text style={styles.minusPlus}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
  },
  innerContainer: {
    height: height * 0.13,
    width: width * 0.92,
    marginHorizontal: width * 0.04,
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 0.4,
    borderBottomColor: "lightgrey",
  },
  image: {
    height: height * 0.09,
    width: height * 0.09,
    borderRadius: 8,
    borderWidth: 0.4,
    borderColor: "lightgray",
  },
  name: {
    fontWeight: "500",
    fontSize: 13,
    maxWidth: width * 0.44,
  },
  miktar: {
    color: "#848897",
    fontWeight: "600",
    fontSize: 12,
    marginTop: 3,
  },
  price: {
    color: "#5D3EBD",
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 6,
  },
  counterContainer: {
    width: width * 0.22,
    height: height * 0.04,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 0.5,
    borderColor: "lightgrey",
    shadowOpacity: 0.4,
    shadowColor: "gray",
  },
  button: {
    flex: 1,
    alignItems: "center",
  },
  minusPlus: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#5D3EBD",
  },
  quantityBox: {
    flex: 1,
    backgroundColor: "#5D3EBD",
    height: height * 0.04,
    justifyContent: "center",
    alignItems: "center",
  },
  quantityText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});

const mapDispatchToProps = (dispatch: any) => ({
  removeFromCart: (product: Product) =>
    dispatch(actions.removeFromCart(product)),

  increaseQuantity: (product: Product) =>
    dispatch(actions.increaseQuantity(product)),
});

export default connect(null, mapDispatchToProps)(CartItem);
