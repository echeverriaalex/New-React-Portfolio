import styled from "styled-components";

export const PresentationContainerStyled = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
    width: 100%;

    h1{
        font-size: 2.5rem;
        margin-bottom: 10px;
    }  
    p{
        font-size: 1.2rem;
        max-width: 600px;
    }
`;


export const TextContainerStyled = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;

    h1{
        font-size: 2.5rem;
        margin-bottom: 10px;
    }  
    p{
        font-size: 1.2rem;
        max-width: 600px;
    }
`;

export const ImageContainerStyled = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;

    width: 300px;
    height: 300px;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }
`;