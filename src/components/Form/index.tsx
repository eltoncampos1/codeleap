import { Button, FormGroup, Title } from '../'
import * as S from './styles'

export const Form = () => {
  return (
    <S.Container>
      <Title>What’s on your mind?</Title>

      <FormGroup label='title' />
      <FormGroup fieldType="text-area" label='content' />
      <Button>CREATE</Button>
    </S.Container>
  )
}