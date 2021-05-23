import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { decrement, increment } from './hamburgerCounterSlice';
import Counter from './Counter';

export default function createCounter(name, actions) {
  return function () {
    const count = useSelector((state) => state[name].value);
    const dispatch = useDispatch();
    const inc = () => dispatch(actions.increment());
    const dec = () => dispatch(actions.decrement());

    console.log('state is', window.getState());
    return <Counter count={count} inc={inc} dec={dec} />;
  };
}
