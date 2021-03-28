import styled from 'styled-components';

export const HomeContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 15% auto 0 auto;
`;

export const TitleContainer = styled.div`
  font-size: 1rem;
  color: white;
  opacity: 0.7;
  letter-spacing: 8px;
  @media(min-width: 768px) {
    font-size: 2rem;
  }
`;

export const DateContainer = styled.div`
  font-size: 2rem;
  color: white;
  opacity: 0.7;
  letter-spacing: 12px;
  @media(min-width: 768px) {
    font-size: 6rem
  }
`;

// export const ImageContainer = styled.div`
//   padding: 0;
//   width: 50%;
//   position: relative;
// `;

// export const Image = styled.div`
//   background-image: url(${img});
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-color: rgba(255, 255, 255, 0.5);
//   background-position: center center;
// `;

// export const BoxContainer = styled.div`
//   padding: 0;
//   width: 50%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;
//   &:before {
//     content: ' ';
//     position: absolute;
//     top: 0;
//     right: 0;
//     left: 0;
//     bottom: 0;
//     width: 50%;
//     background-color: #ffe7d3;
//     box-shadow: 5px 0px 10px 0px rgba(0, 0, 0, 0.1);
//   }
// `;

// export const Box = styled.div`
//   background: rgba(255, 255, 255, 0.8);
//   width: 45vh;
//   height: 45vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 10;
// `;

// export const BoxContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   width: 90%;
//   height: 90%;
//   border: 1px solid #FFDAB9;
//   text-align: center;
//   >h4 {
//     padding: 5px 20px;
//     margin: 0 auto;
//     letter-spacing: 2px;
//     font-weight: 300;
//     font-size: 2rem;
//   }
//   >p {
//     padding: 5px 20px;
//     letter-spacing: 2px;
//     font-weight: 300;
//   }
// `;