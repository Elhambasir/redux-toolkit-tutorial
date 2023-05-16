import { createSlice } from "@reduxjs/toolkit";
import cartItem from "../../cartItems";
const initialState = {
  cartItems: cartItem,
  amount: 3,
  total: 0,
  isLoading: true,
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = []
    },
    removeItem: (state,action) => 
    {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state,action) => 
    {
      const cartItem = state.cartItems.find((item) => item.id === action.payload);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state,{payload}) => 
    {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
    calculate: (state) => 
    {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    }
  }
})

export const { clearCart, removeItem, increase, decrease, calculate } = cartSlice.actions;
export default cartSlice.reducer;