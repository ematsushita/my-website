import React from 'react';
import { CheckForm } from './styles';

const AuthForm = ({ handleNameChange, name, onSubmit}) => {
  return ( 
    <CheckForm>
      <div>
        <input placeholder="enter guest name" name={name} onChange={handleNameChange} type="text" />
      </div>
      <button onClick={(e) => {onSubmit(e, name)}}>find your invite</button>
    </CheckForm>
   );
}
 
export default AuthForm;