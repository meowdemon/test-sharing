import styled from 'styled-components'

export const Main = styled.main`
  width: 100vw;
  height: 100svh;
  background: linear-gradient(
    0deg,
    rgba(40, 43, 111, 1) 0%,
    rgba(26, 29, 74, 1) 70%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: sans-serif;
  font-size: 22px;
`
export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`
export const ShareButton = styled.button`
  width: 64px;
  height: 64px;
  border: 0;
  background-color: darkblue;
  fill: white;
  cursor: pointer;
`
