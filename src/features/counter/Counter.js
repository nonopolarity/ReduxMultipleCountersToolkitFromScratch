import React from 'react';

export default function Counter({ count, inc, dec }) {
  return (
    <div>
      <div>
        <button aria-label="Decrement value" onClick={dec}>
          -
        </button>
        <span>{count}</span>
        <button aria-label="Increment value" onClick={inc}>
          +
        </button>
      </div>
    </div>
  );
}
