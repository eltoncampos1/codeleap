import styled, { css } from 'styled-components'

type TProps = {
  variant: "normal" | "ghost";
}

const normal = css`
  background: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
`

const ghost = css`
  background: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  border: 1px solid ${(props) => props.theme.colors.black};
`

const changeColor = (props: Partial<TProps>) => {
  return props.variant === "normal" ? normal : ghost
}

export const Container = styled.button<TProps>`
  ${(props) => !props.disabled ? changeColor(props) : props.theme.colors.gray};
  cursor: ${(props) => !props.disabled ? "pointer" : "not-allowed"};
  font-weight: bold;
  font-size: 1rem;
  width: 100%;
  max-width: 115px;
  padding: 9px;
  outline: 0;
  border: none;
`