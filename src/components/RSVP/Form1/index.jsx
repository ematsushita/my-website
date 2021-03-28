import React, { useState, useEffect } from 'react';
import { FormContainer, Form, InnerContainer, GreyBlock, FormGroup } from './styles';
import { useHistory } from "react-router-dom";
import firebase from '../../../firebase';

const Form1 = ({ formOneDisplay, name}) => {
  let history = useHistory();
  const [attending, setAttending] = useState(true);
  const [plusOne, setPlusOne] = useState('');
  const [guests, setGuests] = useState([]);
  
  const guestNames = guests.map(guest => guest.name);

  useEffect(() => {
    firebase
    .firestore()
    .collection('guests')
    .onSnapshot((snapshot => {
      const newGuests = snapshot.docs.map(doc => ({
        id: doc.id, 
        ...doc.data()
      }))
      setGuests(newGuests)
    }))
  }, [])

  function onSubmit(e) {
    e.preventDefault();
    if (guestNames.includes(name)) {
      history.push('/error')
    } else {
      firebase
      .firestore()
      .collection('guests')
      .add({
        attending,
        name,
        plusOne
      })
      .then(() => {
        history.push('/thank-you')
      })
    }
  }

  return ( 
    <FormContainer id="form-1-container" display={formOneDisplay}>
      <GreyBlock display={formOneDisplay}>
        <h2>RSVP</h2>
        <p>kindly reply by august 1, 2021.</p>
      </GreyBlock>
      <InnerContainer id="inner-container" display={formOneDisplay}>
        <Form onSubmit={onSubmit}>
          <FormGroup>
            <input type="text" value={name} />
          </FormGroup>
          <FormGroup>
            <input
              type="text"
              value={plusOne}
              onChange={e => setPlusOne(e.currentTarget.value)}
              placeholder="plus one's name"
            />
          </FormGroup>
          <FormGroup id="attending">
            <label>Will you be attending?</label>
            <select value={attending} onChange={e => setAttending(e.currentTarget.value)}>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </FormGroup>
          <button>RSVP!</button>
        </Form>
      </InnerContainer>
    </FormContainer>
   );
}
 
export default Form1;