import { ImageContainerStyled, PresentationContainerStyled, TextContainerStyled } from "./PresentationStyles";

const Presentation = ({title, text, img, children}) => {
    return (
        <PresentationContainerStyled>
            <TextContainerStyled>
                <h1>{title}</h1>
                <p>{text}</p>
                {children}
            </TextContainerStyled>
            <ImageContainerStyled>
                <img src={img} alt={title} />
            </ImageContainerStyled>
        </PresentationContainerStyled>
    );
}
export default Presentation;