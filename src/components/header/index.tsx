import * as S from './styles'
import { Container, Title } from '../'
import theme from '../../styles/theme'

import { BiEdit } from 'react-icons/bi'
import { MdDeleteForever } from 'react-icons/md'
import { HTMLAttributes } from 'react'

type TProps = {
  whitIcons?: boolean;
  title?: string
} & HTMLAttributes<HTMLHeadElement>

export const Header = ({ whitIcons = false, title, ...rest }: TProps) => {
  return (
    <S.Wrapper {...rest}>
      <Container>
        <Title color={theme.colors.white}>{title}</Title>
        {whitIcons && (
          <S.IconWrapper>
            <BiEdit />
            <MdDeleteForever />
          </S.IconWrapper>
        )}
      </Container>
    </S.Wrapper>
  )
}