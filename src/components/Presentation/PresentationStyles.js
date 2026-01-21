import styled from "styled-components";

export const PresentationContainerStyled = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 40px;
    padding: 20px;
    width: 100%;
    border-radius: 20px;
    background-color: #1e1e1e;

    h2{
        font-size: 2.5rem;
        margin-bottom: 10px;
    }  
    p{
        font-size: 1.2rem;
        max-width: 600px;
    }

    @media (max-width: 576px) {
        flex-direction: column;
        justify-content: space-between;
        align-items: space-between;
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
    padding: 10px;
    background-color: #ffffff;
    border-radius: 50%;
    width: 300px;
    height: 300px;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }

    @media (max-width: 576px) {
        flex-direction: column;
        padding: 5px;
    }
`;