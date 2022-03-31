import { useState } from "react"
import { Button, Input, Modal, Paragraph, Title } from "../../components"
import { useApp } from "../../hooks/useApp"
import *  as S from './styles'

export const Signin = () => {
  const { user, getCurrentUser } = useApp()
  return (
    <S.Container>
      <Modal closeButton={false} isOpen size="sm" onClose={() => null}>
        <S.TextContainer>
          <Title>Welcome to CodeLeap network!</Title>
          <Paragraph>Please enter your username</Paragraph>
        </S.TextContainer>
        <Input onChange={(e) => getCurrentUser(e.target.value)} />
        <S.ButtonContainer>
          <Button disabled={!user}>ENTER</Button>
        </S.ButtonContainer>
      </Modal>
    </S.Container>
  )
}