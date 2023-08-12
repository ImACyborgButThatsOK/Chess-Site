import styled from "styled-components";


export const Container = styled.div`
    border-top: 1px solid #ade8f4;
    border-bottom: 1px solid #ade8f4;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 100px;
    padding: 20px;
`;
export const Info = styled.div`
    
    margin-bottom: 20px;
    
`;
export const Title = styled.h2`
    font-size: 70px;
    color: #95d5b2;
    text-align: center;
   
`;
export const Desc = styled.p`
    font-size: 25px;
    color: #adb5bd;
`;

export const CardContainer = styled.div`
    height: 100%;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 30px;
`;

export const Card = styled.div`
    height: 100%;
    width: 400px;
    display: flex;
    flex-direction: column;
   
    background-color: #000814;
    overflow: hidden;
    border-radius: 15px;
    cursor: pointer;
    transition: all ease 0.3s;
    &:hover{
        filter: brightness(0.7);
    }
`;

export const CardInfo = styled.div`
    padding: 5px 10px 10px 10px;
    color: #dee2e6;
    padding: 20px;
    
`;

export const CardTitle = styled.span`
    font-weight: bold;
    font-size: 30px;
    
    `;
export const CardDesc = styled.p`
    font-size: 20px;
    color: #adb5bd;
    margin-top: 5px;
    
`;


export const Img = styled.img`
    height: 80%;
    width: 100%;
    object-fit: cover;
`;