import styled from 'styled-components'

export const Container = styled.main`
 width: 100%;
  > div {
    display: flex;
    flex-direction: column;
  }

  form {
    margin-top: 44px;
  }
`
export const PostsContainer = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;
 margin-top: 35px;

 div + div{
  margin-top: 35px;
 }
`

export const DeleteModalButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left:  auto;

  margin-top: 50px;

  button + button {
    margin-left: 1rem;
  }
`