import styled from "styled-components";

type IModalContent = {
  size: string;
};

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.colors.overlay};
  z-index: 10;
`;

export const ModalContent = styled.div<IModalContent>`
  position: fixed;
  width: 100%;
  top: 50%;
  left: 50%;
  width: ${(props) => props.size};
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.colors.white};
  z-index: 10;
  box-shadow: rgb(0 0 0 / 45%) 0px;
  padding: 2rem;
`;

export const CloseButton = styled.div`
  width: 100%;
  position: relative;
  left: 98%;
  top: -15px;
  font-size: 1.5rem;
  cursor: pointer;
`;