import createCounter from './createCounter';
import { actions } from './drinkCounterSlice';

const DrinkCounter = createCounter('drinkCounter', actions);
export default DrinkCounter;
