import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;  
    
`;
export const Left = styled.div`
    flex: 1;
    display: flex;
    background-color: #222831;
    border-right: #382933 1px solid;
`;

export const Info = styled.div`
    width: 100%;
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
    font-size: 40px;
    font-family: 'Anton', sans-serif;
    line-height: 60px;
    letter-spacing: 2px;

`;
export const Desc = styled.p`


`;
export const Button = styled.button`

    padding: 10px 20px;
    border-radius: 10px;
    border: 1px solid #91C8E4;
    background-color: transparent;
    color: #85CFCB;
    font-weight: bolder;
    transition: all 0.3s ease;
    &:hover{
        cursor: pointer;

        filter: brightness(0.7);
    }
`;
export const Right = styled.div`
    flex: 1;
    display: flex;
    align-content: center;
    justify-content: center;
    background-color: #91C8E4;

`;
export const Img = styled.img`

    width: 80%;
    height: 100%;
`;

