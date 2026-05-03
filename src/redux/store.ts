import { createStore, combineReducers } from "redux";
import cartItems from "./reducers/cartItem";

// Root reducer
const rootReducer = combineReducers({
  cartItems,
});

// Store oluştur
const store = createStore(rootReducer);

export default store;

// TypeScript tipleri
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
