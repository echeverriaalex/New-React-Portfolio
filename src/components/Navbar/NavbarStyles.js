import styled from "styled-components";
import { motion } from "motion/react"
import { NavLink } from "react-router-dom";

export const NavbarContainerStyled = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding: 10px 20px;
    background-color: #383838;
    color: #fff;
    height: 90px;
`;

export const LogoContainerStyled = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    
    max-height: 100%;
    
    background-color: #161616;
    padding: 20px;
    border-radius: 8px;

    
    img{
        height: 50px;
        max-width: 100%;
        max-height: 100%;
    }
`;