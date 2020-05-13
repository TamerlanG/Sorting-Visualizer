import React from "react";

import { Button, Wrapper } from "./header.style";

export default function Header({ randomList, rangeChange, bubbleOnClick }) {
  return (
    <Wrapper>
      <Button disabled>Sorting Visualizer</Button>
      <Button onClick={randomList}>Random List</Button>
      <Button onClick={rangeChange}>Change Size</Button>
      <Button onClick={bubbleOnClick}>Bubble Sort</Button>
      <Button>Heap Sort</Button>
      <Button>Merge Sort</Button>
      <Button>Quick Sort</Button>
    </Wrapper>
  );
}
