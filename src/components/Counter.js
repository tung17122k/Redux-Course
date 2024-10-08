import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { decrement, increase, increment } from "../redux/counter";
import { decrement, increment, increase } from "../redux-toolkit/counterSlice";

const Counter = (props) => {
  const count = useSelector((state) => state.counter.count);
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleIncreaseByValue = () => {
    dispatch(increase(10));
  };

  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center p-5 bg-white shadow w-[400px] mx-auto mt-10">
      <h2 className="mb-5">Count: {count}</h2>
      <div className="flex items-center justify-center gap-x-5">
        <button
          className="inline-block p-2 border border-gray-300"
          onClick={handleDecrement}
        >
          Decrement
        </button>
        <button
          className="inline-block p-2 border border-gray-300"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className="inline-block p-2 border border-gray-300"
          onClick={handleIncreaseByValue}
        >
          Increase by 10
        </button>
      </div>
    </div>
  );
};

export default Counter;
