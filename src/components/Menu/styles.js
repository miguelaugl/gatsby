import styled from 'styled-components';

export const Wrapper = styled.section`
  background: #7b7b7b;
  ${props=>props.theme.primary}
`;

export const Container = styled.nav`
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  height: 6rem;
  padding: 0 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;

    li {
      font-size: 2rem;
      padding: 0 2rem;

      a {
        color: #fff;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
