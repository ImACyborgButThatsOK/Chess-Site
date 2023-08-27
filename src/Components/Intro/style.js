import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;  
    align-items: center;
    justify-content: center;
    background-image: url('./img/bg.png');
    background-size: cover; /* Controla o dimensionamento da imagem */
    background-repeat: no-repeat; /* Evita a repetição da imagem */
  /* Outras propriedades de estilo */


  @media (min-width:360px) and (max-width: 740px){
    background-image: url('./img/bg-feed.png');
    background-size: cover; /* Controla o dimensionamento da imagem */
    background-repeat: no-repeat; /* Evita a repetição da imagem */
  /* Outras propriedades de estilo */
    }

    @media (min-width:820px) and (max-width: 1180px){
    background-image: url('./img/bg-feed.png');
    background-size: cover; /* Controla o dimensionamento da imagem */
    background-repeat: no-repeat; /* Evita a repetição da imagem */
  /* Outras propriedades de estilo */
    }
`;


export const Info = styled.div`
    margin-top: 50px;  
    width: 60%;
    height: 100%; 
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    color: crimson;
    padding: 20px;
    line-height: 50px;

    
    @media (min-width:360px) and (max-width: 740px){
        margin-top: 0px;  
        padding: 10px;
    }

 
    
`;
export const Title = styled.h1`
    text-align: center;
    font-size: 130px;
    font-family: 'Anton', sans-serif;
    line-height: 180px;
    letter-spacing: 4px;

    @media (min-width:360px) and (max-width: 740px){
    font-size: 50px;
    font-family: 'Anton', sans-serif;
    line-height: normal;
    letter-spacing: 4px;
    }

    @media (min-width:820px) and (max-width: 1180px){
        text-align: center;
        font-size: 100px;
        font-family: 'Anton', sans-serif;
        line-height: 120px;
        letter-spacing: 10px;
    }
`;
export const Desc = styled.p`


`;
export const Button = styled.button`

    padding: 20px 0px;
    width: 30%;
    border-radius: 10px;
    border: 2px solid crimson   ;
    background-color: transparent;
    color: white;

    font-weight: bolder;
    transition: all 0.3s ease;
    font-size: 40px;
    &:hover{
        cursor: pointer;
        filter: brightness(0.5);
        color: crimson;

    }

    
    @media (min-width:360px) and (max-width: 740px){
    padding: 10px 0px;
    width: 100%;
    border-radius: 10px;
    border: 2px solid crimson   ;
    background-color: transparent;
    color: white;

    font-weight: bolder;
    transition: all 0.3s ease;
    font-size: 18px;
    }


    @media (min-width:820px) and (max-width: 1180px){
        width: 100%;
    }
`;
