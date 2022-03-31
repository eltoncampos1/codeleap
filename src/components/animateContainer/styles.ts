import styled, { Keyframes } from "styled-components";


type AnimationProps = {
  animation: Keyframes;
};

export const Container = styled.div<AnimationProps>`
  transition: ease-in-out;
  animation: ${(props) => props.animation} 0.1s ease;
`;