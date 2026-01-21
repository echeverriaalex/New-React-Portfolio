import { HomePageWrapper } from "./HomePageStyles";


import me from "../../assets/images/profile/me1.jpeg";
import react from "../../assets/images/skills/react.svg";
import js from "../../assets/images/skills/js.svg";
import node from "../../assets/images/skills/node.svg";
import mysql from "../../assets/images/skills/mysql.svg";
import Section from "../../components/Section/Section";
import Catalog from "../../components/Catalog/Catalog";
import Presentation from "../../components/Presentation/Presentation";

const HomePage = () => {


    let skillsList = [

        {
            img: react,
            name: "React",
            level: "Advanced"
        },
        {
            img: js,
            name: "JavaScript",
            level: "Intermediate"
        },
        {
            img: node,
            name: "Node.js",
            level: "Intermediate"
        },
        {
            img: mysql,
            name: "MySQL",
            level: "Intermediate"
        }
    ];

    return (
        <HomePageWrapper>
            <Section
                background="#2a2a2c"
            >
                <Presentation
                    //title=" "
                    //text="I am a passionate Full Stack Developer with experience in building dynamic and responsive web applications. I specialize in front-end development using React, as well as back-end development with Node.js and Express. I have a strong understanding of SQL and NoSQL databases, and I am dedicated to creating efficient and scalable solutions."
                    /*
                    text= {
                        <>
                            Desarrollador Full Stack con experiencia en la creación
                            de aplicaciones web dinámicas y receptivas. Me especializo en 
                            el desarrollo front-end utilizando React, así como en el 
                            desarrollo back-end con Node.js y Express. Tengo un fuerte 
                            conocimiento de bases de datos SQL y NoSQL, y me apasiona crear 
                            soluciones eficientes y escalables.
                        </>
                    }
                    */
                    img={me}
                >
                    <h2>Hola Mundo!</h2>
                    <h2>soy Alex Echeverria</h2>

                    <h3>Full Stack Developer</h3>
                </Presentation>
            </Section>



            <Section>
                <h1>My Skills</h1>
                <Catalog
                    itemsList={skillsList}
                />
            </Section>


           
        </HomePageWrapper>
    );
}
export default HomePage;