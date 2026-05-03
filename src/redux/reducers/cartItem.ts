import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  INCREASE_QUANTITY,
} from "../constants";
import { CartAction, CartItem } from "../actions/cartActions";

const initialState: CartItem[] = [];

const cartItems = (state = initialState, action: CartAction): CartItem[] => {
  switch (action.type) {
    case ADD_TO_CART:
 
      const existingItem = state.find(
        (item) => item.product.id === action.payload.product.id
      );

      if (existingItem) {
        return state.map((item) =>
          item.product.id === action.payload.product.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      }

      return [...state, action.payload];

    case REMOVE_FROM_CART:
      return state.reduce((acc: CartItem[], item) => {
        if (item.product.id === action.payload.id) {
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, []);

    case INCREASE_QUANTITY:
      return state.map((item) =>
        item.product.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case CLEAR_CART:
      return [];

    default:
      return state;
  }
};

export default cartItems;
