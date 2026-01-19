import styled from "styled-components";
import { motion } from "motion/react"

export const CatalogContainerStyled = styled(motion.div)`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;



    width: 100%;
    min-width: 500px;
    height: 500px;
    max-width: 1200px;
    gap: 20px;

    padding: 20px;
    background-color: #431292;
`;