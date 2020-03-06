import React from 'react';
import { Navbar } from '../../components/nav/navbar';
import { HomePage } from '../../components/home/homepage';
import styled from 'styled-components';

const Body = styled.div`
  background-color: #F0F0F0;
`;

const App = React.memo(() => {
  return (
    <Body>
      <Navbar />
      <HomePage />
    </Body>
  );
})

export default App;
