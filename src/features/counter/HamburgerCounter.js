import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './hamburgerCounterSlice';
import Counter from './Counter';

export default function HamburgerCounter() {
  const count = useSelector((state) => state.hamburgerCounter.value);
  const dispatch = useDispatch();
  const inc = () => dispatch(increment());
  const dec = () => dispatch(decrement());

  console.log('increment() is', increment(), window.getState());
  return <Counter count={count} inc={inc} dec={dec} />;
}
