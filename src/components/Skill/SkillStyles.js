import styled from "styled-components";
import { motion } from "motion/react"

export const SkillContainerStyled = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    padding: 8px;

    

    border: 1px solid #ccc;
    border-radius: 8px;
    //background-color: #f9f9f9;
    //box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    width: 180px;
    height: 180px;

    transition: all 1s ease-in-out;

    

    h3, p{
        user-select: none;
        background: transparent;
        text-align: center;
    }

    h3 {
        font-size: 1.2em;
        color: #ffffff;
    }

    p {
        font-size: 1em;
        color: #bbbbbb;
    }


    &:hover{
        box-shadow: 0 4px 8px rgba(199, 19, 19, 0.84);
        scale: 1.5;
        background-color: #03492e;
    }

`;

export const ImageContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;

    img{
        max-width: 100%;
        max-height: 100%;
    }
`;