import { HTMLAttributes, ReactNode } from 'react';
import * as S from './styles'

type TProps = {
  fontW?: string;
} & HTMLAttributes<HTMLSpanElement>


export const Span = ({ children, fontW, ...rest }: TProps) => {
  return (
    <S.Container fontW={fontW}{...rest}>{children}</S.Container>
  )
}