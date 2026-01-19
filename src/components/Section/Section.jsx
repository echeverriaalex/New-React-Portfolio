import { SectionContainerStyled } from "./SectionStyles";

const Section = ( { title, children, background } ) => {
    return (
        <SectionContainerStyled background={background}>
            <h2>{title}</h2>
            {children}
        </SectionContainerStyled>
    );
}
export default Section;