import { Product } from "../../models";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  INCREASE_QUANTITY,
} from "../constants";

export type CartItem = {
  product: Product;
  quantity: number;
};

export type CartAction =
  | { type: typeof ADD_TO_CART; payload: CartItem }
  | { type: typeof REMOVE_FROM_CART; payload: Product }
  | { type: typeof CLEAR_CART }
  | { type: typeof INCREASE_QUANTITY; payload: Product };

export const addToCart = (payload: CartItem): CartAction => ({
  type: ADD_TO_CART,
  payload,
});

export const removeFromCart = (payload: Product): CartAction => ({
  type: REMOVE_FROM_CART,
  payload,
});

export const clearCart = (): CartAction => ({
  type: CLEAR_CART,
});

export const increaseQuantity = (payload: Product): CartAction => ({
  type: INCREASE_QUANTITY,
  payload,
});
