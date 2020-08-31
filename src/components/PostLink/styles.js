import styled from 'styled-components';
import { Link } from 'gatsby';

export const PostLink = styled(Link)`
  font-size: 2rem;
  margin-top: 1rem;
  width: 100%;

  display: flex;
  align-items: center;

  img {
    border-radius: 50%;
    margin-right: 1rem;
  }
`;
