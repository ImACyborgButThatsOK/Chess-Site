import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 90vh;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 50px;
    color: white;

    background-color: #0F0F0F;
    background-image: url('./img/bg-feed.png');
    background-size: cover;
    background-repeat: no-repeat;
`;


export const Info = styled.div`
    width: 100%;
    text-align: center;
`;
export const Title = styled.h1`
  font-size: 70px;
  color: yellow;
`;
export const CardContainer = styled.div`
    width: 60%;
    flex-wrap: wrap;
    display: flex;
    gap: 30px;
    justify-content: center;

`;
export const Cards = styled.div`
    width: 300px;
    height: 150px;

    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    background-color: #7b2cbf;
    cursor: pointer;
    transition: all ease 0.4s;
    &:hover{
        filter: brightness(0.5);
    }
`;
export const CardTitle = styled.h3`
    font-size: 25px;
    margin: 10px 0;
    color: #ffee32;
`;
export const CardDesc = styled.p`
    font-size: 18px ;
`;