import React from 'react';

import { Wrapper, Container } from './styles';

export default function Menu() {
  return(
    <Wrapper>
      <Container>
        <ul>
          <li>
            <a href="/" >Home</a>
          </li>
          <li>
            <a href="/about" >About</a>
          </li>
        </ul>
      </Container>
    </Wrapper>
  );
}
