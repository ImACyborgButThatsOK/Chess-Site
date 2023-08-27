import styled from "styled-components";

export const Container = styled.div`
     width: 100%;
     height: 100vh;
     color: white;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     background-image: url('./img/bg-feed.png');
    background-size: cover; /* Controla o dimensionamento da imagem */
    background-repeat: no-repeat; /* Evita a repetição da imagem */
  /* Outras propriedades de estilo */
  @media (min-width:360px) and (max-width: 740px){
       display: none;
    }
`;

export const QuestionsTitle = styled.h1`
    font-size: 50px;
    color: #80ed99;
    margin-bottom: 30px;  
`;

export const Wrapper = styled.div`
    width: 80%;
     height: 70vh;
     color: white;
     display: flex;
     flex-wrap: wrap;
     justify-content: center;
     align-items: center;

  
`;

export const Categories = styled.div`
    text-align: center;
    padding: 10px;
    padding: 20px;
    width: 100%;

`;

export const CategoryItem = styled.div`
  cursor: pointer;
  user-select: none;
`;

export const Title = styled.div`
    font-size: 40px;    
    color: #bfd8bd;
    font-family: 'Barriecito', cursive;
    transition: all ease 0.5s;
    cursor: pointer;
    &:hover{  
      filter: brightness(0.6);
    }
`;
export const Subcategories = styled.div`
    width: 100%;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  
`;
export const SubTitle = styled.div`
    font-size: 24px;   
    color: #80ed99;
    width: 100%;

    @media (min-width:740px) and (max-width: 1180px){
        font-size: 30px;
    }
`;