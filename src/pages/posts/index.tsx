import { useEffect, useState } from 'react'
import { Header, Container, Form, Post, Modal, Title, Button } from '../../components'
import { useApp } from '../../hooks/useApp'
import * as S from './styles'



export const Posts = () => {
  const { posts,
    fetchPosts,
    isEditModalOpen,
    isDeleteModalOpen,
    toggleEditModal,
    deletePost,
    toggleDeleteModal,
    postId,
    getPostId
  } = useApp()

  useEffect(() => {
    fetchPosts()
  }, [])

  const handleDeletePost = () => {
    deletePost(postId)
    toggleDeleteModal()
  }


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
              <Post onClick={
                () => getPostId(post.id)}
                key={post.id} post={post}
              />
            ))}
          </S.PostsContainer>
        </Container>
      </S.Container>

      {/* Edit modal */}

      <Modal size='md'
        isOpen={isEditModalOpen}
        onClose={toggleEditModal}
        onOverlayClick={toggleEditModal}
      >
        <Form isEditModal={true} title='Edit item' buttonText='SAVE' />
      </Modal>
      {/* Delete modal */}
      <Modal size='md'
        isOpen={isDeleteModalOpen}
        onClose={toggleDeleteModal}
        onOverlayClick={toggleDeleteModal}
      >
        <Title fontW='400'>Are you sure you want to delete this item?</Title>
        <S.DeleteModalButtonWrapper>
          <Button onClick={() => toggleDeleteModal()} variant="ghost">Cancel</Button>
          <Button onClick={() => handleDeletePost()} variant="ghost">OK</Button>
        </S.DeleteModalButtonWrapper>
      </Modal>
    </>
  )
}