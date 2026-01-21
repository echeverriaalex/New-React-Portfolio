import styled from "styled-components";
import { motion } from "motion/react"

export const CatalogContainerStyled = styled(motion.div)`

    /*
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    */


    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));


    width: 100%;
    max-width: 1200px;
    gap: 20px;
    padding: 20px;
    background-color: #431292;
`;