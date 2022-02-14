export const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case "INCREASE_QTY": {
      let tempCart = state.cart.map((item) => {
        return item.id === action.payload
          ? { ...item, amount: item.amount + 1 }
          : item;
      });
      return { ...state, cart: tempCart };
    }
    case "DECREASE_QTY":
      let tempCart2 = state.cart
        .map((item) => {
          return item.id === action.payload
            ? { ...item, amount: item.amount - 1 }
            : item;
        })
        .filter((item) => item.amount !== 0);
      return { ...state, cart: tempCart2 };
    case "GET_TOTALS":
      const { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;

          cartTotal.total += itemTotal;
          cartTotal.amount += amount;
          return cartTotal;
        },
        { total: 0, amount: 0 }
      );
      return { ...state, total: parseFloat(total.toFixed(2)), amount };
    case "LOADING":
      return { ...state, loading: true };
    case "DISPLAY_ITEMS":
      return { ...state, cart: action.payload, loading: false };
  }
  return state;
};
