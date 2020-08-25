import { ADD_TO_CART, TOGGLE_AMOUNT, GET_SUBTOTALS } from '../types';

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
          items: state.items.map((item) => {
            if (
              item._id === product._id &&
              item.chosenSize === product.chosenSize
            ) {
              return { ...item, count: product.count };
            }
            return item;
          }),
        };
      }

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
