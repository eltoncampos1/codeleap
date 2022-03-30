import { forwardRef } from "react";

import * as S from './styles'

export const Input = forwardRef<HTMLInputElement>((props, ref) => {
  return <S.Container {...props} ref={ref} type="text" />;
});