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
    color: #91C8E4;
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

    padding: 30px 0px;
    width: 30%;
    border-radius: 10px;
    border: 1px solid #91C8E4;
    background-color: transparent;
    color: #85CFCB;
    font-weight: bolder;
    transition: all 0.3s ease;
    font-size: 40px;
    &:hover{
        cursor: pointer;
        filter: brightness(0.7);
    }
`;
