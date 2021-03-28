import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: ${props => (props.isHomePage ? 'transparent' : 'white')};
  height: ${props => (props.isHomePage ? '60px' : '120px')};
  width: 100%;
  position: relative;
  text-align: center;
  border-bottom: ${props => (props.isHomePage ? 'none' : '1px solid #FFDAB9')};
  .menu-transition-enter {
    opacity: 0;
  }
  .menu-transition-enter-active {
    opacity: 0.8;
    transition: opacity 1000ms;
  }
  .menu-transition-exit {
    opacity: 0.8;
  }
  .menu-transition-exit-active {
    opacity: 0;
    transition: opacity 1000ms;
  }
`;

export const MenuButton = styled.button`
  display: ${props => (props.viewerIsOpen ? 'none' : 'block')};
  color: ${props => (props.open ? 'transparent' : 'black')};
  position: absolute;
  background-color: transparent;
  border: none;
  right: 20px;
  top: 20px;
  &:focus {
    outline: none;
    background: transparent;
  }
`;

export const ExitButton = styled.button`
  display: ${props => (props.viewerIsOpen ? 'none' : 'block')};
  z-index: 11;
  color: ${props => (props.open ? 'black' : 'transparent')};
  position: absolute;
  background-color: transparent;
  border: none;
  right: 20px;
  top: 20px;
  &:focus {
    outline: none;
    background: transparent;
  }
`;

export const Menu = styled.div`
  z-index: 10;
  visibility: ${props => (props.open ? 'visible' : 'hidden')};
  opacity: 0.7;
  position: absolute;
  right: 0px;
  top: 0px;
  display: flex;
  flex-direction: column;
  width: 250px;
  height: ${props => props.height}px;
  background: ${props => (props.isHomePage ? 'white' : '#FFDAB9')};
  padding: 20px;
  justify-content: center;
`;

export const MenuItem = styled.div`
  display: inline-block;
  color: #5e5b56;
  margin: 20px 20px;
  font-weight: ${props => props.active && 'bold'};
  border-bottom: ${props => props.active && '2px solid #5e5b56'};
  &:hover {
    border-bottom: 2px solid #5e5b56;
    font-weight: bold;
    cursor: pointer;
  }
`;

export const InitialContainer = styled.div`
  font-size: 3rem;
  padding-top: 2rem;
  font-weight: 200;
  @media(min-width: 768px) {
    font-size: 5rem;
    padding-top: 0;
  }
`;
