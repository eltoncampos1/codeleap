import styled from 'styled-components';

export const Container = styled.textarea`
  width: 100%;
  min-height: 80px;
  height: 100%;
  border: 1px solid ${(props) => props.theme.colors.gray};
  border-radius: 4px;
  padding: 5px 11px;
  color: ${(props) => props.theme.colors.gray};
  font-size: 14px;
  resize: none;
`