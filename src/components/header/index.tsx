import * as S from './styles'
import { Container, Title } from '../'
import theme from '../../styles/theme'

import { BiEdit } from 'react-icons/bi'
import { MdDeleteForever } from 'react-icons/md'
import { HTMLAttributes } from 'react'

type TProps = {
  whitIcons?: boolean;
  title?: string;
  onEditClick?: () => void;
  onDeleteClick?: () => void;
} & HTMLAttributes<HTMLHeadElement>

export const Header = ({ whitIcons = false, title, onEditClick, onDeleteClick, ...rest }: TProps) => {
  return (
    <S.Wrapper {...rest}>
      <Container>
        <Title color={theme.colors.white}>{title}</Title>
        {whitIcons && (
          <S.IconWrapper>
            <BiEdit onClick={onEditClick} />
            <MdDeleteForever onClick={onEditClick} />
          </S.IconWrapper>
        )}
      </Container>
    </S.Wrapper>
  )
}