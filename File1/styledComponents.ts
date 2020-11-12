import styled from "styled-components";

export const MainContainer = styled.div`
  position: fixed;
  height: 50vh;
  margin: 40px 15px;
  width: 100%;
  background-color: green;
`;

export const SubContainer = styled.div`
  height: 40px;
  margin: 10px;
  display: flex;
  justify-content: center;
  background-color: red;
  z-index: 1036;
`;

export const ButtonHighlight = styled.button`
  cursor: pointer;
`;

export const PopOverlay = styled.div`
  opacity: 0.75;
  position: fixed;
  left: 0px;
  top: 0px;
  bottom: 0px;
  right: 0px;
`;
