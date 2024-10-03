import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import { useSelector } from "react-redux";

function App() {
  // const [count, setCount] = useState(0);
  const { count } = useSelector((state) => state.counter);

  return (
    <div className="App">
      <h2> The count from App is {count}</h2>
      <Counter></Counter>
    </div>
  );
}

export default App;
