import React from 'react';
import AuthForm from './authForm';
import {
  AuthFormContainer,
  AuthFormInnerContainer,
  GreyBlock
} from './styles';

const CheckForm = ({ handleNameChange, onCheckSubmit, name, authFormDisplay }) => {

  return (
    <AuthFormContainer id="auth-form-container" display={authFormDisplay}>
      <GreyBlock>
        <h2>RSVP</h2>
        <p>kindly reply by august 1, 2021.</p>
      </GreyBlock>
      <AuthFormInnerContainer id="auth-form-inner-container" display={authFormDisplay}>
          <AuthForm handleNameChange={handleNameChange} onSubmit={onCheckSubmit} name={name} />
        </AuthFormInnerContainer>
    </AuthFormContainer>
   );
}
 
export default CheckForm;