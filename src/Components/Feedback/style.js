import styled from "styled-components";

export const Container = styled.div`
    border-top: 2px solid crimson;
    border-bottom: 2px solid crimson;
    width: 100%;
    height: 100vh;
    background-image: url('./img/bg-feed.png');
    background-color: #0F0F0F;
    background-size: cover;
    background-repeat: no-repeat;

    @media (min-width:360px) and (max-width: 1180px){
     display: none;
    }
   
`;
export const Title = styled.h1`
    margin-top: 50px;
    font-size: 70px;
    color: crimson;
    text-align: center; 
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
  

   
`

export const FeedCard = styled.div`
`;

export const Img = styled.img`
  object-fit: cover;
`;