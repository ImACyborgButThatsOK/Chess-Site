import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 35px;
    background-color: #161616;
    color: white;
    position: fixed;
`;
export const ContainerLink = styled.div`
    height: 100%;
    display: flex;
    align-items: center;    
    justify-content: center;
    gap: 10px;
`;
export const LinkItem = styled.a`
    font-size: 10px;
    font-weight: bolder;
    padding: 5px;
    border-bottom: 1px solid #DDE6ED;
    transition: all ease 0.5s ;
    cursor: pointer;

    &:hover{
        filter: brightness(0.7);
    }
    &:first-child{
        border-bottom: 1px solid #87CBB9;
        &:hover{
            filter: brightness(0.7);
        }
    }
    &:last-child{
        padding: 5px;
        border-radius: 10px;
        border: 1px solid #B9EDDD;
        margin-left: 20px;

        &:hover{
            filter: brightness(0.8);
            border: 1px solid #41644A;
            color: #FAD4D4;
        }
    }
   
`;