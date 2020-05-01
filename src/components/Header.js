import React from "react";

import { Button, Wrapper, SortWrapper } from "./header.style";

export default function Header({ rangeChange }) {
  return (
    <Wrapper>
      <Button onClick={() => console.log("Clicked")}>Generate New Array</Button>
      <Button onClick={rangeChange}>Input your range</Button>
      <SortWrapper>
        <Button onClick={() => console.log("Clicked")}>Merge</Button>
        <Button onClick={() => console.log("Clicked")}>Quick</Button>
        <Button onClick={() => console.log("Clicked")}>Heap</Button>
        <Button onClick={() => console.log("Clicked")}>Bubble</Button>
      </SortWrapper>
    </Wrapper>
  );
}
