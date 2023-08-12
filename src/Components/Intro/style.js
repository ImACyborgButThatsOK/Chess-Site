import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;  
    align-items: center;
    justify-content: center;
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
    color: #88d4ab;
    padding: 20px;
    line-height: 50px;
    
`;
export const Title = styled.h1`
    text-align: center;
    font-size: 130px;
    font-family: 'Anton', sans-serif;
    line-height: 180px;
    letter-spacing: 4px;

`;
export const Desc = styled.p`


`;
export const Button = styled.button`

    padding: 20px 0px;
    width: 30%;
    border-radius: 10px;
    border: 2px solid #a8dadc   ;
    background-color: transparent;
    color: #caf0f8;
    font-weight: bolder;
    transition: all 0.3s ease;
    font-size: 40px;
    &:hover{
        cursor: pointer;
        filter: brightness(0.5);
    }
`;
