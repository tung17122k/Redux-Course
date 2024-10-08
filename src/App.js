import React, { useEffect, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import { useDispatch, useSelector } from "react-redux";
import Card from "./components/Card";
import { toggleDarkMode } from "./redux-toolkit/globalSlice";
import useDarkMode from "./hooks/useDarkMode";
import Sidebar from "./uis/Sidebar";
import ButtonToggle from "./uis/ButtonToggle";

function App() {
  // const [count, setCount] = useState(0);

  const { count } = useSelector((state) => state.counter);

  return (
    <div className="App">
      <h2> The count from App is {count}</h2>
      <Counter></Counter>
      <div className="text">
        <Card></Card>
        <SwitchDarkMode></SwitchDarkMode>
      </div>
      <div>
        <Sidebar></Sidebar>
        <ButtonToggle></ButtonToggle>
      </div>
    </div>
  );
}

function SwitchDarkMode() {
  const globalOptions = useSelector((state) => state.global);
  console.log("🚀 ~ SwitchDarkMode ~ globalOptions:", globalOptions);
  const dispatch = useDispatch();
  const [darkMode, setDarkMode] = useDarkMode();

  useEffect(() => {
    dispatch(toggleDarkMode(darkMode));
  }, []);

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
    dispatch(toggleDarkMode(!darkMode));
  };

  return <button onClick={handleToggleDarkMode}>Toggle Dark Mode</button>;
}

export default App;
