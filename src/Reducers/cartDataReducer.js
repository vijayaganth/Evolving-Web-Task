import { createSlice, current } from "@reduxjs/toolkit";
const twoDecimalTrunc = (num) => Math.trunc(num * 100) / 100;

const initValue =  { value: [], count: 0, total: 0 };

export const cartData = createSlice({
  name: "cart",
  initialState: initValue,
  reducers: {
    addCart: (state, action) => {
      const data = {
        value: action.payload,
        count:
          action.payload?.reduce(
            (acc, currentValue) => acc + currentValue.count,
            0
          ) || 0,
        total: twoDecimalTrunc(
          action.payload?.reduce(
            (acc, currentValue) =>
              acc + currentValue.price * currentValue.count,
            0
          ) || 0
        ),
      };
      return data;
    },
    incrementItem: (state, action) => {
      const data = {
        value: current(state).value.map((el) =>
          el.id === action.payload.id
            ? { ...el, count: action.payload.count + 1 }
            : el
        ),
        count:
          current(state).value?.reduce((acc, value) => acc + value.count, 0) +
            1 || 0,
        total:
          twoDecimalTrunc(current(state).total + action.payload.price) || 0,
      };
      return data;
    },
    decrementItem: (state, action) => {
      const data = {
        value: current(state).value.map((el) =>
          el.id === action.payload.id
            ? { ...el, count: action.payload.count - 1 }
            : el
        ),
        count:
          current(state).value?.reduce((acc, value) => acc + value.count, 0) -
            1 || 0,
        total:
          twoDecimalTrunc(current(state).total - action.payload.price) || 0,
      };
      return data;
    },
    resetCart: () => initValue
  },
});

export const { addCart, incrementItem, decrementItem, resetCart } = cartData.actions;

export default cartData.reducer;
