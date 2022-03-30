/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { HTMLAttributes, ReactNode } from "react";
import { MdClose } from "react-icons/md";
import ReactDOM from "react-dom";

import * as S from "./styles";
import { AnimateContainer } from "..";

type Sizes = "sm" | "md" | "lg";

interface IModalProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  children: ReactNode;
  size?: Sizes;
  onClose: () => void;
  onOverlayClick?: () => void;
  closeButton?: boolean;
}

export const Modal = ({
  isOpen,
  children,
  size,
  onClose,
  onOverlayClick,
  closeButton = true,
  ...rest
}: IModalProps) => {
  if (!isOpen) return null;

  const changeModalSize = () => {
    if (!size) return "60vw";

    const sizes = {
      sm: "35%",
      md: "45%",
      base: "50%",
      lg: "80%"
    };

    return size && sizes[size];
  };

  return ReactDOM.createPortal(
    <>
      <S.ModalOverlay
        onClick={onOverlayClick}
        aria-label="Modal Overlay, click to close Modal"
      />
      <AnimateContainer animation="fadeIn">
        <S.ModalContent {...rest} size={changeModalSize()}>
          {closeButton && (
            <S.CloseButton aria-label="Close Modal">
              <MdClose aria-label="Close Modal" onClick={onClose} />
            </S.CloseButton>
          )}
          {children}
        </S.ModalContent>
      </AnimateContainer>
    </>,
    document.getElementById("portal")!
  );
};
