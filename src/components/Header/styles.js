import styled from 'styled-components';

export const Wrapper = styled.header`
  background: #f6f6f6;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  height: 12rem;
  padding: 0 1rem;

  display: flex;
  align-items: center;

  img {
    max-width: 8rem;
    border-radius: 50%;
  }

  h1 {
    margin-left: 2rem;
    font-size: 2rem;
    color: #1e1a15;
  }
`;
