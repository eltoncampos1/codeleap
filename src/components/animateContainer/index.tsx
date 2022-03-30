import { ReactNode } from "react";
import { FADEIN } from "./animations";

import * as S from "./styles";

export type Animation = "fadeIn" | "rotate";

type AnimateContainerProps = {
  children: ReactNode;
  animation: Animation;
};

export const AnimateContainer = ({
  children,
}: AnimateContainerProps) => {

  return <S.Container animation={FADEIN}>{children}</S.Container>;
};