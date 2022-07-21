import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ButtonProps {}

const StyledButton = styled.button`
  background-color: #0c2340;
  color: #FFF;
  padding: 8px 12px;
`;

export function Button(props: ButtonProps) {
  return <StyledButton>Button</StyledButton>;
}

export default Button;
