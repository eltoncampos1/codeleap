import { HTMLAttributes, ReactNode } from 'react';
import * as S from './styles'

type TProps = {
  color?: string;
} & HTMLAttributes<HTMLHeadingElement>


export const Title = ({ color, children, ...rest }: TProps) => {
  return (
    <S.Container color={color ?? "#000"} {...rest}>{children}</S.Container>
  )
}