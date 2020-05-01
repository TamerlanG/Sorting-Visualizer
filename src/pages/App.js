/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "./App.style.css";

function App() {
  const [size, setSize] = useState(5);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const randomArr = Array.from({ length: size }, () =>
      Math.floor(Math.random() * 100)
    );
    console.log(arr);
    setArr(randomArr);
  }, [size]);

  const rangeChange = () => {
    const range = prompt("How big do you want the graph to be?");
    setSize(range);
  };

  return (
    <div className="App">
      <Header rangeChange={rangeChange} />
    </div>
  );
}

export default App;
