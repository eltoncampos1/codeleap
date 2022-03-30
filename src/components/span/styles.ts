import styled from 'styled-components';

type TProps = {
  fontW?: string;
}

export const Container = styled.span<TProps>`
  font-weight: ${props => props.fontW ?? "400"};
  font-size: 18px;
  line-height: 21.9px;
  color: ${(props) => props.theme.colors.gray};
`