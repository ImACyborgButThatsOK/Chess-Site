import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url('./img/bg-offer.png');
    background-size: cover; /* Controla o dimensionamento da imagem */
    background-repeat: no-repeat; /* Evita a repetição da imagem */
  /* Outras propriedades de estilo */

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: bolder;
    letter-spacing: 2px;
    margin-left: 100px;
    margin-top: 150px;
    gap: 20px;

`;
export const Title = styled.h3`
    font-size: 60px;
    color: yellow;
    font-weight: bolder;
`;
export const Price = styled.p`
    font-size: 50px;
    color: #ade8f4;
    .changeP{
        color: lawngreen;
        text-decoration: line-through;
        margin-right: 10px;
    }
    .offer{
        color: yellow;
    }
`;
export const Desc = styled.p`

    font-size: 20px;
    color: #ffd166;
    font-weight: bold;
    margin-bottom: 10px;
`;
export const Button = styled.button`
    width: 40%;
    margin: 0 auto;

    font-size: 25px;
    color: #d81159;
    font-weight: bold;
    border-radius: 10px;
    border: 3px solid black;
    padding: 10px ;
    background-color: #e9ff70;
    cursor: pointer;
    transition: all ease 0.4s;

    &:hover{
        filter: brightness(0.7);
    }
`;