import { Header, Container, Form, Post } from '../../components'
import * as S from './styles'

const posts = {
  title: "CodeLeap Network",
  content: "Code Leap Network asdasdad",
  username: "elton",
  create_datetime: "25 minutes ago"
}

export const Posts = () => {
  return (
    <S.Container>
      <Header title="CodeLeap Network" />
      <Container>
        <Form />
        <S.PostsContainer>
          <Post {...posts} />
        </S.PostsContainer>
      </Container>
    </S.Container>
  )
}