import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface MilkyWayProps {}

const StyledMilkyWay = styled.div`
  color: pink;
`;

export function MilkyWay(props: MilkyWayProps) {
  return (
    <StyledMilkyWay>
      <h1>Welcome to MilkyWay!</h1>
    </StyledMilkyWay>
  );
}

export default MilkyWay;
