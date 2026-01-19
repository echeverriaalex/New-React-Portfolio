import Skill from "../Skill/Skill";
import { CatalogContainerStyled } from "./CatalogStyles";

const Catalog = ( { itemsList } ) => {
    return(
        <CatalogContainerStyled
            //animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
            {
                itemsList && itemsList.map( (item, index) => (
                    <Skill 
                        key={index}
                        img={item.img}
                        name={item.name}
                        level={item.level}
                    />
                ))
            }
        </CatalogContainerStyled>
    );
}
export default Catalog;