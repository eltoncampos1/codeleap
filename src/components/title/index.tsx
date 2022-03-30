import { HTMLAttributes, ReactNode } from 'react';
import * as S from './styles'

type TProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLHeadingElement>


export const Title = ({ children, ...rest }: TProps) => {
  return (
    <S.Container {...rest}>{children}</S.Container>
  )
}