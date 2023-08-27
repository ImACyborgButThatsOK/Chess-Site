import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid crimson;

    
    @media (min-width:360px) and (max-width: 740px){
        display: none;
    }

    @media (min-width:820px) and (max-width: 1180px){
        display: none;
    }

`;
export const ImgContainer = styled.div``;
export const Img = styled.img`
`;


export const InfoContainer = styled.div`
    width: 100%;    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    gap: 10px;
    color: aliceblue;


`;
export const Wrapper = styled.div`
    height: 100%;
    width: 85%;

    .colorChange{
        color: crimson;
        text-decoration: underline;
        font-weight: 400;
        cursor: pointer;
    }
`;
export const Title = styled.h2`
    font-size: 50px;
`;
export const Desc = styled.p`
    width: 80%;
    font-size: 30px;
    margin: 30px 0px;
`;
export const Button = styled.button`

    width: 20%;
    height: 50px;
    color: white;
    font-size: 20px;
    font-weight: bolder;
    background-color: transparent;
    border: 1px solid crimson;
    border-radius: 10px;
    cursor: pointer;
    transition: all ease 0.4s;
    &:hover{
        filter: brightness(0.7);
    }

`;  