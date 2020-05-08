/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import Header from "../components/Header";
import Main from "./Main";

import "./App.style.css";

function App() {
  const [size, setSize] = useState(10);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    updateList();
  }, [size]);

  const updateList = () => {
    const randomArr = Array.from({ length: size }, () =>
      generateRandomInteger(50, 500)
    );
    setArr(randomArr);
  };

  const generateRandomInteger = (min, max) => {
    return Math.floor(min + Math.random() * (max + 1 - min));
  };

  const rangeChange = () => {
    const range = prompt(
      "How big do you want the graph to be? (between 5-100)"
    );
    if (range < 5 || range > 100) {
      rangeChange();
    } else {
      setSize(range);
    }
  };

  const generateRandomList = () => {
    const sizeOfList = generateRandomInteger(5, 100);
    const randomArr = Array.from({ length: sizeOfList }, () =>
      generateRandomInteger(50, 500)
    );
    setArr(randomArr);
  };

  return (
    <div className="App">
      <Header rangeChange={rangeChange} randomList={generateRandomList} />
      <Main data={arr} />
    </div>
  );
}

export default App;
