import styled from 'styled-components'

type TProps = {
  maxW: string;
}

export const Container = styled.div<TProps>`
 width: 100%;
 max-width: ${(props) => props.maxW};
 margin: 0 auto;
 display: flex;

 `