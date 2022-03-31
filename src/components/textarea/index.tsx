import { TextareaHTMLAttributes } from 'react'
import * as S from './styles'

type TProps = TextareaHTMLAttributes<HTMLTextAreaElement>

export const TextArea = ({ ...rest }: TProps) => {
  return (
    <S.Container {...rest} />
  )
}