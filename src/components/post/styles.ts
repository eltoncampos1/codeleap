import styled from 'styled-components'

export const Container = styled.main`
 width: 100%;
 max-width: 723px;
 border: 1px solid ${props => props.theme.colors.gray};
 margin: 0 auto;
`

export const PostWrapper = styled.div`
 width: 100%;
 padding: 24px 38px;

 p {
   font-size: 18px;
 }
`
export const UserInfo = styled.div`
 width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`