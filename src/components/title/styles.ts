import styled from 'styled-components';

type TProps = {
  color: string;
}

export const Container = styled.h2<TProps>`
  font-size: 22px;
  font-weight: bold;
  line-height:25.78px;
  color: ${(props) => props.color};
`