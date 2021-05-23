import createCounter from './createCounter';
import { actions } from './hamburgerCounterSlice';

const HamburgerCounter = createCounter('hamburgerCounter', actions);
export default HamburgerCounter;
