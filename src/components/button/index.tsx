import { ButtonHTMLAttributes, ReactNode } from "react";
import * as S from './styles'

type TProps = {
  children: ReactNode;
  variant?: "normal" | "ghost";
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, variant = "normal", ...rest }: TProps) => {
  return (
    <S.Container variant={variant} {...rest}>{children}</S.Container>
  )
}