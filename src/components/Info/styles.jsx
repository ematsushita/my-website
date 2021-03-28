import styled from 'styled-components';
import img from '../../engagement-photos/elissa+matthew-engagement-131_websize.jpg';

export const InfoContainer = styled.div`
  background: white;
  height: 100vh;
  padding: 0 30px;
  #ipad-image {
    max-width: 100%;
    margin-top: 2rem;
    @media(min-width: 1024px) {
      display: none;
    }
  }
`;

export const InfoBlockContainer = styled.div`
  display: flex;
  text-align: left;
  padding-top: 30px;
  > div > h2 {
    margin: 0;
    font-size: 3rem;
    font-weight: 100;
  }
  > div > p {
    font-weight: 200;
    margin: 0.5rem 0;
    > span {
      font-weight: 400;
    }
  }
  @media(min-width: 1024px) {
    text-align: ${props => props.textAlign};
  }
`;

export const TextContainer = styled.div`
  width: 80%;
  padding: 0 20px;
  @media(min-width: 1024px) {
    width: 50%;
  }
`;

export const List = styled.ul`
  margin-top: 0.5rem;
  padding-left: 20px;
`;

export const ListItem = styled.li`
  font-size: 0.9rem;
  font-weight: 200;
  >a{
    text-decoration: none;
    font-weight: 400;
    color: #5e5b56;
    &:hover {
      color: #FFDAB9;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 50%;
  display: none;
  > img {
    height: 300px;
  }
  @media(min-width: 1024px) {
    display: block;
  }
`;

// export const HomeContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   width: 90%;
//   margin: 0 auto;
//   height: 100%;
//   background-color: #fff;
// `;

// export const ImageContainer = styled.div`
//   padding: 0;
//   width: 50%;
//   position: relative;
// `;

// export const Image = styled.div`
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   width: 100%;
  
//   &:before {
//     content: ' ';
//     background-image: url(${img});
//     top: 0;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     background-size: cover;
//     background-repeat: no-repeat;
//     position: absolute;
//     background-position: center center;
//     filter: grayscale(100%);
//   }
// `;

// export const MenuContainer = styled.div`
//   position: absolute;
//   right: 0;
//   width: 50%;
//   height: 100%;
//   background-color: rgba(255, 231, 211, 0.6);
// `;

// export const MenuContents = styled.div`
//   width: 85%;
//   height: 100%;
//   margin: 0 auto;
//   >h5 {
//     font-weight: 300;
//     text-transform: uppercase;
//     letter-spacing: 2px;
//     font-size: 1.3rem;
//     margin-bottom: 1rem;
//   }
// `;

// export const Menu = styled.ul`
//   display: flex;
//   flex-direction: column;
//   margin: 0 auto;
//   justify-content: space-around;
//   list-style-type: none;
//   padding-left: 0;
//   height: 30%;
//   >a {
//     text-decoration: none;
//   }
// `;

// export const MenuItem = styled.li`
//   color: #5e5b56;
//   text-decoration: none;
//   margin: 0;
//   &:hover {
//     color: #FFDAB9;
//     cursor: pointer;
//   }

// `;

// export const BoxContainer = styled.div`
//   padding: 0;
//   width: 50%;
//   position: relative;
//   overflow: scroll;
  
// `;

// export const InfoCardContainer = styled.div`
//   width: 80%;
//   padding: 20px 0px;
//   border-bottom: 1px solid #eee;
//   margin: 0 auto;
// `;

// export const InfoCardTitle = styled.h5`
//   text-transform: uppercase;
//   font-weight: 300;
//   font-size: 1rem;
//   margin: 1rem 0rem;
// `;

// export const InfoCardText = styled.p`
//   font-size: 0.8rem;
//   margin: 0.3rem;
//   margin-top: ${props => props.extraSpace ? "0.8rem" : "0.3rem"};
//   font-weight: ${props => props.extraSpace ? "600" : "350"};
// `;
