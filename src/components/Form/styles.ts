import styled from 'styled-components'

export const Container = styled.form`
 width: 100%;
 max-width: 723px;
 border: 1px solid ${props => props.theme.colors.gray};
 padding: 23px 30px;
 margin: 0 auto;

 display: flex;
 flex-direction: column;

 h2 {
   margin-bottom: 34px;
 }

 div + div {
   margin-top: 20px;
 }

 button {
   margin-left: auto;
   margin-top: 42px;
 }
`