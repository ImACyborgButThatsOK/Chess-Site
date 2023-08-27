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
    background-image: url('./img/bg-feed.png');
    background-color: #0F0F0F;
    background-size: cover;
    background-repeat: no-repeat;

    @media (min-width:360px) and (max-width: 740px){
        gap: 0px;
    }
    
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
    font-size: 120px;
    color: #ef233c;
    letter-spacing: 5px;
    font-family: 'Bebas Neue', sans-serif;


    @media (min-width:360px) and (max-width: 740px){
        font-size: 40px;
        text-align: center;
        margin-bottom: 20px;
    }

    @media (min-width:740px) and (max-width: 1180px){
        text-align: center;
        font-size: 70px;
        text-align: center;
    }
`;
export const Desc = styled.p`
    text-align: center;
    font-size: 25px;
    width: 60%;
    color: #adb5bd;
        .colorP{
            color: #ef233c;
    }   
    @media (min-width:360px) and (max-width: 740px){
       display: none;
    }

    
`;
export const ContainerCards = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;

    @media (min-width:360px) and (max-width: 740px){
        display: flex;
        flex-direction: column;
        overflow-x: scroll;
        padding-top: 40px;

    }
    @media (min-width:740px) and (max-width: 1180px){
        font-size:17px;
        gap: 30px;
    }
    
    
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

    @media (min-width:740px) and (max-width: 1180px){
        font-size:17px;
        width: 100%;
    }
`;
export const CardTitle = styled.span`
    font-size: 40px;

    @media (min-width:360px) and (max-width: 740px){
    font-size:20px;
    }
    @media (min-width:740px) and (max-width: 1180px){
        font-size:17px;
        text-align: center;
    }
`;
export const CardDesc = styled.span`
    font-size: 20px;

    @media (min-width:360px) and (max-width: 740px){
    font-size:17px;
    }

    @media (min-width:740px) and (max-width: 1180px){
        font-size:17px;
        text-align: center;
    }
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

    @media (min-width:360px) and (max-width: 740px){
        width: 100%;
        padding: 10px 20px ;
        border-radius: 10px;
        font-size: 25px;
    }
`;

