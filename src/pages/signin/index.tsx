import { useEffect, useState } from "react"
import { Button, Input, Modal, Paragraph, Title } from "../../components"
import { useApp } from "../../hooks/useApp"
import *  as S from './styles'
import { Link } from 'react-router-dom';


export const Signin = () => {
  const { user, getCurrentUser } = useApp()

  useEffect(() => {
    getCurrentUser('')
  }, [])
  return (
    <S.Container>
      <Modal closeButton={false} isOpen size="sm" onClose={() => null}>
        <S.TextContainer>
          <Title>Welcome to CodeLeap network!</Title>
          <Paragraph>Please enter your username</Paragraph>
        </S.TextContainer>
        <Input onChange={(e) => getCurrentUser(e.target.value)} />
        <S.ButtonContainer>
          <Link to="/posts">
            <Button disabled={!user}>ENTER</Button>
          </Link>
        </S.ButtonContainer>
      </Modal>
    </S.Container>
  )
}