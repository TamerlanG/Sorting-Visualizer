/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import Header from "../components/Header";
import Main from "./Main";

import "./App.style.css";

import { sleep } from "../helpers";

function App() {
  const [size, setSize] = useState(10);
  const [arr, setArr] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentNext, setCurrentNext] = useState(null);

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

  const bubbleOnClick = async () => {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        setCurrentIndex(i);
        setCurrentNext(i + 1);
        if (arr[j] > arr[j + 1]) {
          let tmp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tmp;
        }
        setArr([...arr]);
      }
      await sleep(0);
    }
    setCurrentIndex(null);
    setCurrentNext(null);
  };

  return (
    <div className="App">
      <Header
        rangeChange={rangeChange}
        randomList={generateRandomList}
        bubbleOnClick={bubbleOnClick}
      />
      <Main data={arr} currentIndex={currentIndex} nextIndex={currentNext} />
    </div>
  );
}

export default App;
