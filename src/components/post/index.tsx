import { formatDistance, subDays } from 'date-fns'
import { HTMLAttributes } from 'react'

import { Header, Span, Paragraph } from '..'
import { useApp } from '../../hooks/useApp'
import * as S from './styles'

type TProps = {
  post: TPost,
} & HTMLAttributes<HTMLDivElement>

export const Post = ({ post, ...rest }: TProps) => {
  const formatedDate = formatDistance(subDays(new Date(post.created_datetime), 0), Date.now(), { addSuffix: true, includeSeconds: true })
  const { user, toggleEditModal, toggleDeleteModal } = useApp()

  return (
    <S.Container {...rest}>
      <Header
        title={post.title}
        whitIcons={user === post.username}
        onEditClick={() => toggleEditModal()}
        onDeleteClick={() => toggleDeleteModal()}
      />
      <S.PostWrapper>
        <S.UserInfo>
          <Span fontW='700'>@{post.username}</Span>
          <Span>{formatedDate}</Span>
        </S.UserInfo>
        <Paragraph>
          {post.content}
        </Paragraph>
      </S.PostWrapper>
    </S.Container>
  )
}