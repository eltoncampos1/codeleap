import styled, { css } from 'styled-components'

type Tprops = {
  isEditModal?: boolean
}

const changeStyles = (props: any) => {
  if (props.isEditModal) {
    return css`
    button {
      margin-left: auto;
      margin-top: 42px;
    }
    `
  }

  return css`
   border: 1px solid ${(props: { theme: { colors: { gray: string } } }) => props.theme.colors.gray};
   padding: 23px 30px;
   button {
      margin-right: auto;
      margin-top: 42px;
    }
  `
}

export const Container = styled.form<Tprops>`
 width: 100%;
 max-width: 723px;

 margin: 0 auto;
${props => changeStyles(props)}

  display: flex;
  flex-direction: column;

 h2 {
  margin-bottom: 34px;
}

div + div {
  margin-top: 20px;
}


`