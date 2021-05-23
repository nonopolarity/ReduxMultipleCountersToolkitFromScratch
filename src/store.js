import { configureStore } from '@reduxjs/toolkit';
import hamburgerCounterReducer from './features/counter/hamburgerCounterSlice';
import drinkCounterReducer from './features/counter/drinkCounterSlice';

export default configureStore({
  reducer: {
    hamburgerCounter: hamburgerCounterReducer,
    drinkCounter: drinkCounterReducer,
  },
});
