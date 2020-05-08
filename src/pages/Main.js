/* eslint-disable no-restricted-globals */
import React from "react";
import styled from "styled-components";

import { Button } from "../components/header.style";

export default function Main({ data }) {
  const width = screen.width / data.length;
  return (
    <Container>
      <BlocksContainer>
        {data.map((size) => (
          <>
            <Bar height={`${size}px`} width={`${width}px`}>
              {data.length < 20 && <Button disabled>{size}</Button>}
            </Bar>
          </>
        ))}
      </BlocksContainer>
      <Step>
        <Button disabled>Made By Tamerlan</Button>
      </Step>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const BlocksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;

const Step = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #be6c2f;
  border: 1px solid white;
`;

const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.color || "#be6c2f"};
  margin-right: 2px;
`;
