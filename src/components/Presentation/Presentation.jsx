import { ImageContainerStyled, PresentationContainerStyled, TextContainerStyled } from "./PresentationStyles";

const Presentation = ({title, text, img}) => {
    return (
        <PresentationContainerStyled>
            <TextContainerStyled>
                <h1>{title}</h1>
                <p>{text}</p>
            </TextContainerStyled>
            <ImageContainerStyled>
                <img src={img} alt={title} />
            </ImageContainerStyled>
        </PresentationContainerStyled>
    );
}
export default Presentation;