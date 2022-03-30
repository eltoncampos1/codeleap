import { HTMLAttributes } from "react"
import * as S from './styles'

type TProps = {
  maxW?: string;
} & HTMLAttributes<HTMLDivElement>

export const Container = ({ maxW, children, ...rest }: TProps) => {
  return (
    <S.Container maxW={maxW ?? "1400px"} {...rest}>{children}</S.Container>
  )
}