import styled from 'styled-components'

export const Wrapper = styled.header`
 width: 100%;
 padding: 27px 38px;
 background-color: ${(props) => props.theme.colors.black};
 color: ${(props) => props.theme.colors.white};

 > div {
    display: flex;
 }
 `

export const IconWrapper = styled.div`
  font-size:2rem;
  margin-left: auto;

  svg + svg {
    margin-left: 30px;
    cursor: pointer;
  }
`