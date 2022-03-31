import { formatDistance, subDays } from 'date-fns'

import { Header, Span, Paragraph } from '..'
import { useApp } from '../../hooks/useApp'
import * as S from './styles'

export const Post = ({ title, created_datetime, content, username }: TPost) => {
  const formatedDate = formatDistance(subDays(new Date(created_datetime), 0), Date.now(), { addSuffix: true, includeSeconds: true })
  const { user, toggleEditModal } = useApp()

  return (
    <S.Container>
      <Header
        title={title}
        whitIcons={user === username}
        onEditClick={() => toggleEditModal()}
      />
      <S.PostWrapper>
        <S.UserInfo>
          <Span fontW='700'>@{username}</Span>
          <Span>{formatedDate}</Span>
        </S.UserInfo>
        <Paragraph>
          {content}
        </Paragraph>
      </S.PostWrapper>
    </S.Container>
  )
}