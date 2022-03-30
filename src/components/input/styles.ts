import styled from 'styled-components';

export const Container = styled.input`
  width: 100%;
  min-height: 28px;
  height: 100%;
  border: 1px solid ${(props) => props.theme.colors.gray};
  border-radius: 4px;
  padding: 5px 11px;
  color: ${(props) => props.theme.colors.gray};
  font-size: 14px;
`