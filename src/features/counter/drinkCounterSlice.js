import { createSlice } from '@reduxjs/toolkit';

export const drinkCounterSlice = createSlice({
  name: 'drinkCounter',

  initialState: {
    value: 0,
  },

  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } =
  drinkCounterSlice.actions;
export default drinkCounterSlice.reducer;