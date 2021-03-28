import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BridalParty from './components/BridalParty';
import Info from './components/Info';
import Photos from './components/Photos';
import RSVP from './components/RSVP';
import Home from './components/Home';
import GuestList from './components/GuestList';
import ThankYou from './components/ThankYou';
import Sorry from './components/Sorry';
import Error from './components/AlreadySubmitted';
import { BodyContainer, MainContainer } from './styles';

function App() {
  // const homePage = window.location.pathname === '/';
  const [currentPage, setcurrentPage] = useState(window.location.pathname);
  const isHomePage = currentPage === '/';
  useEffect(() => {
    setcurrentPage(window.location.pathname)
  }, [currentPage]);

  return (
    <Router>
      <BodyContainer id="body-container">
        <MainContainer id="main-container" homePage={isHomePage}>
          <Switch>
            {/* <Route path="/bridal-party" component={BridalParty} />
            <Route path="/guests" component={GuestList} /> */}
            <Route path="/info" component={Info} key={window.location.pathname} />
            <Route path="/rsvp" component={RSVP} />
            <Route path="/photos" component={Photos} />
            <Route path="/invite-not-found" component={Sorry} />
            <Route path="/thank-you" component={ThankYou} />
            <Route path="/error" component={Error} />
            <Route path="/" exact component={Home} key={window.location.pathname} />
          </Switch>
        </MainContainer>
      </BodyContainer>
    </Router>

  );
}

export default App;
