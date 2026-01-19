import { ImageContainerStyled, SkillContainerStyled } from "./SkillStyles";
import { motion } from "motion/react"

const Skill = ({ img, name, level }) => {
  return (
    <SkillContainerStyled  
      //style={box}
      //animate={{ rotate: -360 }}
      //transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
    >
        <ImageContainerStyled>
            <img src={img} alt={name} />
        </ImageContainerStyled>
        <h3>{name}</h3>
        <p>{level}</p>
    </SkillContainerStyled>
  );
}
export default Skill;