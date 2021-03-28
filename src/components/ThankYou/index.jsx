import React from 'react';
import Header from '../Header';
import { MessageContainer, GreyBlock } from '../Sorry/styles';
import img from './full-width-image.png';

const ThankYou = () => {
  const height = window.innerHeight;
  return ( 
    <>
      <Header height={height}/>
      <MessageContainer id="thank-you-container">
        <GreyBlock>
          <h2>Thank you!</h2>
          <p>your response has been submitted.</p>
        </GreyBlock>
        <div id="full-width-image">
          <img src={img} alt="elissa + matthew wedding" />
        </div>
      </MessageContainer>
    </>
   );
}
 
export default ThankYou;