import { InputHTMLAttributes } from 'react';
import { Paragraph, Input, TextArea } from '../'
import * as S from './styles'

type TProps = {
  label: string;
  fieldType?: "input" | "text-area"
  name: string,
  onChange: (e: any) => void,
  value?: string
}

export const FormGroup = ({ fieldType = "input", label, ...rest }: TProps) => {
  return (
    <S.Container>
      <Paragraph>{label}</Paragraph>
      {fieldType === "input" ? (
        <Input {...rest} />
      ) : (
        <TextArea {...rest} />
      )}
    </S.Container>
  )
}