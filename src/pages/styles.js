import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 1180px;
  padding: 3rem 1rem;

  ul {
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;

    li {
      justify-self: center;
    }
  }
`;
