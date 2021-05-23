import createCounterSlice from './createCounterSlice';

export const drinkCounterSlice = createCounterSlice('drinkCounter');

export const actions = drinkCounterSlice.actions;
export default drinkCounterSlice.reducer;
