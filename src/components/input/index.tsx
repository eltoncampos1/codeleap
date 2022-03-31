import { InputHTMLAttributes } from "react";

import * as S from './styles'

type TProps = InputHTMLAttributes<HTMLInputElement>

export const Input = ({ ...rest }: TProps) => {
  return <S.Container {...rest} type="text" />;
}