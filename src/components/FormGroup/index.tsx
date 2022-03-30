import { Paragraph, Input, TextArea } from '../'
import * as S from './styles'

type TProps = {
  label: string;
  fieldType?: "input" | "text-area"
}

export const FormGroup = ({ fieldType = "input", label }: TProps) => {
  return (
    <S.Container>
      <Paragraph>{label}</Paragraph>
      {fieldType === "input" ? (
        <Input />
      ) : (
        <TextArea />
      )}
    </S.Container>
  )
}