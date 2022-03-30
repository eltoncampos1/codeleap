import { Button, Input, Modal, Paragraph, Title } from "../../components"
import *  as S from './styles'

export const Signin = () => {
  return (
    <S.Container>
      <Modal closeButton={false} isOpen size="sm" onClose={() => null}>
        <S.TextContainer>
          <Title>Welcome to CodeLeap network!</Title>
          <Paragraph>Please enter your username</Paragraph>
        </S.TextContainer>
        <Input />
        <S.ButtonContainer>
          <Button>Enter</Button>
        </S.ButtonContainer>
      </Modal>
    </S.Container>
  )
}