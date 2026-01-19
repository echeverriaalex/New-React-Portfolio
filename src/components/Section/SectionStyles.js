import styled from "styled-components";

export const SectionContainerStyled = styled.section`
    display: flex;
    //flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    min-height: 100vh;
    width: 100%;
    background: ${ ( { background } ) => background || null };
    color: #fff;
`;