import { useEffect, useState } from 'react'
import { Header, Container, Form, Post, Modal, Title, Button } from '../../components'
import { useApp } from '../../hooks/useApp'
import * as S from './styles'



export const Posts = () => {
  const { posts, fetchPosts, isEditModalOpen, toggleEditModal } = useApp()

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <>
      <S.Container>
        <Header
          title="CodeLeap Network"
        />
        <Container>
          <Form />
          <S.PostsContainer>
            {posts && posts.map(post => (
              <Post key={post.id} {...post} />
            ))}
          </S.PostsContainer>
        </Container>
      </S.Container>
      <Modal size='md'
        isOpen={isEditModalOpen}
        onClose={toggleEditModal}
        onOverlayClick={toggleEditModal}
      >
        <Title fontW='400'>Are you sure you want to delete this item?</Title>
        <S.DeleteModalButtonWrapper>
          <Button variant="ghost">Cancel</Button>
          <Button variant="ghost">OK</Button>
        </S.DeleteModalButtonWrapper>
      </Modal>
    </>
  )
}