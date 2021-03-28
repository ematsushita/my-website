import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { 
  HeaderContainer, 
  MenuButton,
  ExitButton,
  Menu,
  MenuItem,
  InitialContainer
} from './styles';

const Header = ({ height, viewerIsOpen }) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(window.location.pathname);
  const isHomePage = window.location.pathname === '/';

  const onClick = () => {
    setOpen(!open);
  };

  return ( 
    <HeaderContainer id="header-container" isHomePage={isHomePage}>
      { !isHomePage && (
        <InitialContainer>
          m + e
        </InitialContainer>
      )}
      <CSSTransition
        in={open}
        timeout={400}
        classNames="menu-transition"
        unmountOnExit
        appear
        onEnter={() => setOpen(true)}
        onExited={() => setOpen(false)}
      >
        <Menu id="menu" open={open} height={height} isHomePage={isHomePage}>
          <Link
            to="/rsvp"
            onClick={() => onClick()}
          >
            <MenuItem active={active === "/rsvp"}>rsvp</MenuItem>
          </Link>
          <Link
            to="/info"
            onClick={() => onClick()}
          >
            <MenuItem active={active === "/info"}>info</MenuItem>
          </Link>
          <Link
            to="/photos"
            onClick={() => onClick()}
          >
            <MenuItem active={active === "/photos"}>photos</MenuItem>
          </Link>
        </Menu>
      </CSSTransition>
      <MenuButton onClick={() => onClick()} open={open} viewerIsOpen={viewerIsOpen}>
        <FontAwesomeIcon
          icon={faBars}
          size="2x"
        />
      </MenuButton>
      <ExitButton onClick={() => onClick()} open={open} viewerIsOpen={viewerIsOpen}>
        <FontAwesomeIcon
          icon={faTimes}
          size="2x"
        />
      </ExitButton>
    </HeaderContainer>
   );
}
 
export default Header;