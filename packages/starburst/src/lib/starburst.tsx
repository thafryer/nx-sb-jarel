import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface StarburstProps {}

const StyledStarburst = styled.div`
  color: pink;
`;

export function Starburst(props: StarburstProps) {
  return (
    <StyledStarburst>
      <h1>Welcome to Starburst!</h1>
    </StyledStarburst>
  );
}

export default Starburst;
