import styled from 'styled-components';

export const AuthFormContainer = styled.div`
  display: ${props => props.display === "none" ? "none" : "flex"};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  >div>h2 {
    letter-spacing: 2px;
    font-weight: 300;
    margin-bottom: 3rem;
  }
`;

export const GreyBlock = styled.div`
  height: 175px;
  width: 100%;
  background-color: #EFEEEC;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  > h2 {
    padding-top: 20px;
    font-size: 2rem;
    margin-bottom: 0 !important;
  }
  > p {
    font-weight: 200;
  }
  @media(min-width: 768px) {
    height: 200px;
  }
  @media(min-width: 1024px) {
    height: 300px;
  }
`;

export const AuthFormInnerContainer = styled.div`
  display: ${props => props.display === "none" ? "none" : "block"};
  padding: 10px;
  align-items: center;
  background-color: white;
  margin: 0 auto;
  padding: 30px 0px;
  width: 80%;
  margin: 0;
  @media(min-width: 768px) {
    position: absolute;
    padding: 60px 80px;
    width: 60%;
    top: 150px;
  }
  @media(min-width: 1024px) {
    top: 175px;
  }
`;

export const CheckForm = styled.form`
  >div>input {
    background-color: transparent;
    font: inherit;
    border-style: none;
    border-bottom: 1px solid #EFEEEC;
    &:focus {
      outline: none;
    }
    font-size: 1.5rem;
    font-weight: 200;
    @media(min-width: 768px) {
      font-size: 2.5rem
    }
  }
  >button {
    position: relative;
    height: 40px;
    width: auto;
    font-size: 0.7rem;
    background-color: #444444;
    color: #fff; 
    text-transform: uppercase;
    margin: 25px auto;
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