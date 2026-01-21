import { LogoContainerStyled, NavbarContainerStyled } from "./NavbarStyles";
import logo from "../../assets/images/EA.png";

const Navbar = () => {
    return (
        <NavbarContainerStyled>
            <h1>My Portfolio</h1>
            <LogoContainerStyled to="/">
                <img src={logo} alt="Logo" />
            </LogoContainerStyled>
        </NavbarContainerStyled>
    );
}
export default Navbar;