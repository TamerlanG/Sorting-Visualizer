import styled from "styled-components";

export const Button = styled.p`
  color: #fff;
  cursor: pointer;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  line-height: 30px;

  &:hover {
    color: #00ff3b;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-evenly;
  height: 50px;
  width: 100%;
  background-color: #c314cc;
  padding-left: 25px;
  padding-right: 25px;
`;

export const SortWrapper = styled.div`
  display: flex;
  width: 200px;
  flex-direction: row;
  align-content: center;
  justify-content: space-evenly;
`;

export const RangeWrapper = styled.div`
  width: 200px;
  align-content: center;
  justify-content: space-evenly;
`;
