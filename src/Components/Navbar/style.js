import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color: #161616;
    color: white;
    position: fixed;
    z-index: 888;
`;
export const ContainerLink = styled.div`
    height: 100%;
    display: flex;
    align-items: center;    
    justify-content: center;
    gap: 10px;
`;
export const LinkItem = styled.a`
    font-size: 25px;
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
    
   
`;