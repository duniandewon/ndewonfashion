import {
  ADD_TO_CART,
  TOGGLE_AMOUNT,
  GET_SUBTOTALS,
  REMOVE_FROM_CART,
} from '../types';

const updateCart = (items, product) =>
  items.map((item) => {
    if (item._id === product._id && item.chosenSize === product.chosenSize) {
      return { ...item, count: product.count };
    }
    return item;
  });

const toggleCartAmount = (items, product, toggle) =>
  items.map((item) => {
    if (item._id === product._id && item.chosenSize === product.chosenSize) {
      if (toggle === 'inc') return { ...item, count: item.count + 1 };

      if (toggle === 'dec') return { ...item, count: item.count - 1 };
    }
    return item;
  });

export default (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case TOGGLE_AMOUNT:
      const { product, toggle } = action.payload;

      if (!toggle) {
        return {
          ...state,
          items: updateCart(state.items, product),
        };
      } else {
        return {
          ...state,
          items: toggleCartAmount(state.items, product, toggle),
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(
          (item) =>
            item._id !== action.payload._id &&
            item.chosenSize === action.payload.chosenSize
        ),
      };

    case GET_SUBTOTALS:
      const { subtotal, amount } = state.items.reduce(
        (subtotal, item) => {
          const { price, count } = item;
          const itemTotal = parseFloat(price) * count;
          subtotal.subtotal += itemTotal;
          subtotal.amount += count;
          return subtotal;
        },
        { subtotal: 0, amount: 0 }
      );

      return { ...state, subtotal, amount };

    default:
      return state;
  }
};
