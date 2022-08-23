import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface TagProps {}

const StyledTag = styled.div`
  color: blue;
`;

export function Tag(props: TagProps) {
  return (
    <StyledTag>
      <h1>Welcome to Tag!</h1>
    </StyledTag>
  );
}

export default Tag;
