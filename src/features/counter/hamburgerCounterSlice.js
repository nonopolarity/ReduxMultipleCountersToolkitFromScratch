import createCounterSlice from './createCounterSlice';

export const hamburgerCounterSlice = createCounterSlice('hamburgerCounter');

export const actions = hamburgerCounterSlice.actions;
export default hamburgerCounterSlice.reducer;
