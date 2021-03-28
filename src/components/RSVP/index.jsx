import React, { useState, useEffect } from 'react';
import firebase from '../../firebase';
import { useHistory } from "react-router-dom";
import Header from '../Header';
import CheckForm from './CheckForm';
import Form1 from './Form1';
import Form2 from './Form2';
import { RSVPContainer } from './styles';

const RSVP = () => {
  let history = useHistory();
  const [plusOneGuests, setPlusOneGuests] = useState([]);
  const [noPlusOneGuests, setNoPlusOneGuests] = useState([]);
  const [name, setName] = useState('');
  const [authFormDisplay, setAuthFormDisplay] = useState('');
  const [formOneDisplay, setFormOneDisplay] = useState("none");
  const [formTwoDisplay, setFormTwoDisplay] = useState("none");

  const height = window.innerHeight;

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  useEffect(() => {
    firebase
    .firestore()
    .collection('plusOne')
    .onSnapshot((snapshot => {
      const newPlusOnes = snapshot.docs.map(doc => ({
        id: doc.id, 
        ...doc.data()
      }))
      setPlusOneGuests(newPlusOnes)
    }))
  }, [])

  useEffect(() => {
    firebase
    .firestore()
    .collection('noPlusOne')
    .onSnapshot((snapshot => {
      const newNoPlusOnes = snapshot.docs.map(doc => ({
        id: doc.id, 
        ...doc.data()
      }))
      setNoPlusOneGuests(newNoPlusOnes)
    }))
  }, [])

  const plusOneList = plusOneGuests.map(guest => guest.name);
  const noPlusOneList = noPlusOneGuests.map(guest => guest.name);

  const onCheckSubmit = (event, name) => {
    event.preventDefault();
    const filteredPlustOneList = plusOneList.filter(guest => guest.toLowerCase() === name.toLowerCase());
    const filteredNoPlustOneList = noPlusOneList.filter(guest => guest.toLowerCase() === name.toLowerCase())
    if (filteredPlustOneList.length > 0) {
      setAuthFormDisplay('none');
      setFormOneDisplay('flex');
    } else if (filteredNoPlustOneList.length > 0){
      setAuthFormDisplay('none');
      setFormTwoDisplay('flex');
    } else {
      history.push('/invite-not-found')
    }
  }
  return (
    <>
    <Header height={height} />
    <RSVPContainer id="rsvp-container">
      <CheckForm
        id="check-form"
        onCheckSubmit={onCheckSubmit}
        name={name}
        handleNameChange={handleNameChange}
        authFormDisplay={authFormDisplay}
      />
      <Form1 id="form-1" name={name} formOneDisplay={formOneDisplay}/>
      <Form2 id="form-2" name={name} formTwoDisplay={formTwoDisplay}/>
    </RSVPContainer>
    </>
   );
}
 
export default RSVP;