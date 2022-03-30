import { Header, Span, Paragraph } from '..'
import * as S from './styles'

type TProps = {
  content: string;
  username: string;
  title: string;
  create_datetime: string;
}

export const Post = ({ title, create_datetime, content, username }: TProps) => {
  return (
    <S.Container>
      <Header title={title} whitIcons />
      <S.PostWrapper>
        <S.UserInfo>
          <Span fontW='700'>@{username}</Span>
          <Span>{create_datetime}</Span>
        </S.UserInfo>
        <Paragraph>
          {content}
        </Paragraph>
      </S.PostWrapper>
    </S.Container>
  )
}