import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
<<<<<<< HEAD
=======
  //cartTotalItems: [],
>>>>>>> 3a680830a4cbbbf59e607b76f9d9881974808611
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0 && state.cartItems[itemIndex].cartQuantity <= 4) {
        state.cartItems[itemIndex].cartQuantity += 1;
<<<<<<< HEAD
        toast.info(`Amount of ${state.cartItems[itemIndex].name} increased`, {
=======
        //state.cartTotalItems.push(state.cartItems[itemIndex]);
        toast.info(`Cantidad de ${state.cartItems[itemIndex].name} aumentada`, {
>>>>>>> 3a680830a4cbbbf59e607b76f9d9881974808611
          position: "bottom-left",
        });
      } else if (!state.cartItems[itemIndex]) {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
<<<<<<< HEAD
        toast.success(`${action.payload.name} added to cart`, {
=======
        //state.cartTotalItems.push(tempProduct);
        toast.success(`${action.payload.name} agregado al carrito`, {
>>>>>>> 3a680830a4cbbbf59e607b76f9d9881974808611
          position: "bottom-left",
        });
      }

      //localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeFromCart: (state, action) => {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );

      state.cartItems = nextCartItems;
      //localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

      // toast.error(`${action.payload.name} eliminado del carrito`, {
      //   position: "bottom-left",
      // });
    },

    decreaseCart: (state, action) => {
      console.log('carrito', state.cartItems.values)
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        toast.info(`Amount of ${state.cartItems[itemIndex].name} decreased`, {
          position: "bottom-left",
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );

        state.cartItems = nextCartItems;

        toast.error(`${action.payload.name} removed from the cart`, {
          position: "bottom-left",
        });
      }

      //localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    clearCart: (state) => {
      state.cartItems = [];
      toast.error(`Cart is currently empty`, {
        position: "bottom-left",
      });
      //localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    clearCart(state, action) {
      state.cartItems = [];
      //localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      // toast.error("Cart cleared", { position: "bottom-left" });
    },
    getUserCart: (state, action) => {
      //console.log("soy el payload",action.payload)
      if (!action.payload) {
        state.cartItems = [];
        state.cartTotalAmount = 0;
        state.cartTotalAmount = 0;
      } else {
        state.cartItems = action.payload.cartItems;
        state.cartTotalQuantity = action.payload.cartTotalQuantity;
        state.cartTotalAmount = action.payload.cartTotalAmount;
<<<<<<< HEAD
=======
        //state.cartTotalItems = action.payload.cartTotalItems;
>>>>>>> 3a680830a4cbbbf59e607b76f9d9881974808611
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decreaseCart,
  clearCart,
  getTotals,
  getUserCart,
} = cartSlice.actions;
export default cartSlice.reducer;
