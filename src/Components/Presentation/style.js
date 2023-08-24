import styled from "styled-components";


export const Container = styled.div`
    border-top: 1px solid crimson;
    border-bottom: 1px solid crimson;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 100px;
    padding: 20px;

    background-image: url('./img/bg-feed.png');
    background-color: #0F0F0F;
    background-size: cover;
    background-repeat: no-repeat;


    @media (min-width:360px) and (max-width: 740px){
        gap: 0px;
        padding: 10px;
    }
`;
export const Info = styled.div`
    margin-bottom: 20px;
    @media (min-width:360px) and (max-width: 740px){
        gap: 0px;
        padding-right: 20px;
    }
`;
export const Title = styled.h2`
    font-size: 70px;
    color: crimson;
    
    text-align: center;
    @media (min-width:360px) and (max-width: 740px){
        font-size: 30px;
    }
   
`;
export const Desc = styled.p`
    font-size: 25px;
    color: #adb5bd;
    @media (min-width:360px) and (max-width: 740px){
        font-size:20px;
        text-align: center;
    }
`;

export const CardContainer = styled.div`
    height: 100%;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;

    @media (min-width:360px) and (max-width: 740px){
            display: flex;
            flex-wrap: wrap;
            overflow-x: scroll;
    }
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

    @media (min-width:360px) and (max-width: 740px){
        display: flex;
        height: 100%;
        width: 400px;
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

    @media (min-width:360px) and (max-width: 740px){
        font-weight: bold;
        font-size:  20px;
    }
    `;
export const CardDesc = styled.p`
    font-size: 20px;
    color: #adb5bd;
    margin-top: 5px;

    @media (min-width:360px) and (max-width: 740px){
        font-weight: bold;
        font-size:  18px;
    }
`;


export const Img = styled.img`
    height: 80%;
    width: 100%;
    object-fit: cover;
`;