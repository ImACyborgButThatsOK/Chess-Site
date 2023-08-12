const { styled } = require("styled-components");

export const Container = styled.div`

    width: 100%;
    height: 80vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 50px;
    color: white;
    padding: 20px;
    
    
`;
export const ColorStyle = styled.span`
    color: crimson;
    font-size: 25px;
`;
export const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`;
export const Title = styled.h2`
    margin-top: 50px;   
    font-size: 120px;
    color: #ef233c;
    letter-spacing: 5px;
    font-family: 'Bebas Neue', sans-serif;
`;
export const Desc = styled.p`
    text-align: center;
    font-size: 25px;
    width: 60%;
    color: #adb5bd;
        .colorP{
            color: #ef233c;
    }   
`;
export const ContainerCards = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 70px;
    
`;
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    .icon{
        margin-bottom: 10px;
        font-size: 80px;
        cursor: pointer;
    }
`;
export const CardTitle = styled.span`
    font-size: 40px;
`;
export const CardDesc = styled.span`
    font-size: 20px;
`;
export const CardButton = styled.button`

    font-size: 25px;
    padding: 10px 20px ;
    border-radius: 10px;
    font-size: 25px;
    color: white;
    border: 1px solid crimson;
    background-color: transparent;
    cursor: pointer;
    margin-top: 10px;
    transition: all ease 0.4s;
    &:hover{
        filter: brightness(0.5);
    }
`;

