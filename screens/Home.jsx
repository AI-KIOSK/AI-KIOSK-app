import MenuScrollList from '@components/home/MenuScrollList';
import OrderSection from '@components/home/OrderSection';
import React from 'react';
import styled from 'styled-components';

function Home(props) {
  return (
    <Container>
      <MenuScrollList />
      <OrderSection />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;

  justify-content: space-around;
  align-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default Home;
