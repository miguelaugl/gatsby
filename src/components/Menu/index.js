import React from 'react';
import { Link } from 'gatsby';

import { Wrapper, Container } from './styles';

export default function Menu() {
  return(
    <Wrapper>
      <Container>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </Container>
    </Wrapper>
  );
}
