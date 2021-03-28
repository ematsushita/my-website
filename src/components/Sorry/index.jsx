import React from 'react';
import Header from '../Header';
import { MessageContainer, GreyBlock } from './styles';
import { Link } from "react-router-dom";

const Sorry = () => {
  const height = window.innerHeight;
  return ( 
    <>
    <Header height={height}/>
    <MessageContainer id="invite-not-found-container">
      <GreyBlock>
        <h2>Sorry!</h2>
        <p>We couldn't find your invite</p>
        <Link to="/rsvp"><button>Back to RSVP</button></Link>
      </GreyBlock>
    </MessageContainer>
  </>
   );
}
 
export default Sorry;