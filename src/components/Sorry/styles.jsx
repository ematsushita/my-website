import styled from 'styled-components';

export const MessageContainer = styled.div`
  background: white;
  height: 100vh;
  padding: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  >div>h2 {
    letter-spacing: 2px;
    font-weight: 300;
    margin-bottom: 3rem;
  }
  > div > img {
    max-width: 100%;
  }
  >div>a>button {
    position: relative;
    height: 40px;
    width: auto;
    font-size: 0.7rem;
    background-color: #444444;
    color: #fff; 
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 10px;
    border: 1px solid #444444;
    transition: all 0.4s ease; 
    &:hover {
      cursor: pointer;
      color: #444444;
      background-color: #fff;
    }
  }
`;

export const GreyBlock = styled.div`
  height: 200px;
  width: 100%;
  background-color: #EFEEEC;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > h2 {
    padding: 0;
    margin: 0;
    font-size: 2rem;
    margin-bottom: 0 !important;
  }
  > p {
    font-weight: 200;
  }
`;
