import React from 'react';
import Header from '../Header';
import img1 from '../../engagement-photos/elissa+matthew-engagement-36_websize.jpg';
import img2 from '../../engagement-photos/elissa+matthew-engagement-131_websize.jpg';
import img3 from '../../engagement-photos/elissa+matthew-engagement-51_websize.jpg';
import img4 from '../../engagement-photos/elissa+matthew-engagement-51_websize_cropped.jpg';

import { 
  InfoContainer,
  InfoBlockContainer,
  TextContainer,
  List, 
  ListItem,
  ImageContainer
 } from './styles';


const Info = () => {
  const height = window.innerHeight;

  return ( 
    <>
    <Header height={height} />
    <InfoContainer id="info-container">
      <InfoBlockContainer textAlign="left">
        <TextContainer>
          <h2>the wedding</h2>
          <p><span>date: </span>October 1, 2021</p>
          <p><span>location: </span>Stanley Park Pavilion, 610 Pipeline Rd</p>
          <p><span>start time: </span>4pm</p>
          <p><span>directions: </span></p>
          <List>
            <ListItem>From Georgia Street, enter Stanley Park and continue straight through the round-about. Take your first right after the Stanley Park Pavilion sign with the large red rose, which will swing left and bring you to the Pavilion.</ListItem>
            <ListItem>From English Bay, enter Stanley Park via Beach Avenue. Turn right onto North Lagoon Drive (at Second Beach). Once past the lagoon, take a left at the stop sign and continue left through the round-about and take your first right after the “Stanley Park Pavilion” sign with the large red rose, which will swing left and bring you to the Pavilion.</ListItem>
          </List>
        </TextContainer>
        <ImageContainer id="image-1">
          <img src={img1} alt="elissa + matthew wedding" />
        </ImageContainer>
      </InfoBlockContainer>

      <InfoBlockContainer textAlign="right">
        <ImageContainer id="image-2">
          <img src={img2} alt="elissa + matthew wedding" />
        </ImageContainer>
        <TextContainer>
          <h2>where to stay</h2>
          <p>info to come</p>
        </TextContainer>
      </InfoBlockContainer>
     
      <InfoBlockContainer textAlign="left">
        <TextContainer>
          <h2>what to eat</h2>
          <p><span>ramen</span></p>
          <List>
            <ListItem><a href="https://marutama.ca/" rel="noopener noreferrer" target="_blank">Marutama</a> - Matthew's #1 choice.</ListItem>
            <ListItem><a href="https://ramendanbo.com/" rel="noopener noreferrer" target="_blank">Danbo</a> - super popular ramen joint. Expect to wait in line!</ListItem>
          </List>
          <p><span>sushi</span></p>
          <List>
            <ListItem><a href="https://www.kishimotorestaurant.com/" rel="noopener noreferrer" target="_blank">Kishimoto</a> - pro tip: make a reservation well in advance or prepare to wait in line!</ListItem>
            <ListItem><a href="https://minamirestaurant.com/" rel="noopener noreferrer" target="_blank">Minami</a> - Miku's sister restaurant with a more relaxed vibe. If you can, grab a table on their beautiful outdoor patio.</ListItem>
          </List>
          <p><span>fushion</span></p>
          <List>
            <ListItem><a href="http://www.kissatanto.com/" rel="noopener noreferrer" target="_blank">Kissa Tanto</a> - one of Elissa's favourite spots serving Japanese/Italian fusion</ListItem>
            <ListItem><a href="https://www.ancoradining.com/" rel="noopener noreferrer" target="_blank">Ancora</a> - one of our go-to fine dining spots serving Japanese/Peruvian cuisine.</ListItem>
          </List>
        </TextContainer>
        <ImageContainer id="image-3">
          <img src={img3} alt="elissa + matthew wedding"/>
        </ImageContainer>
      </InfoBlockContainer>
      <img src={img4} alt="elissa + matthew wedding" id="ipad-image"/>
    </InfoContainer>
    </>
   );
}
 
export default Info;