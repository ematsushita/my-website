import React from 'react';
import Header2 from '../Header2';
import { 
  HomeContainer,
  TitleContainer,
  DateContainer
 } from './styles';

const Home = () => {
  const height = window.innerHeight;

  return ( 
    <>
      <Header2 height={height} />
      <HomeContainer id="home-container">
        <DateContainer>10.01.2021</DateContainer>
        <TitleContainer>MATTHEW & ELISSA</TitleContainer>
      </HomeContainer>
    </>
   );
}
 
export default Home;