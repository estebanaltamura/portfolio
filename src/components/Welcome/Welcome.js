import "./Welcome.css";

export const Welcome = () => {
  return (
    <div className="welcomeContainer">
      <h2 className="welcomeTitle">Hola.</h2>
      <div className="paragraphsContainer">
        <p className="welcomeParagraphs">Soy Andrés Altamura.
        </p>
        <p className="welcomeParagraphs">
          De chico me conecté con el desarrollo y el mundo de la informática, pero al salir de la secundaria me incliné por el mundo emprendedor.
        </p>
        <p className="welcomeParagraphs">
          Haber emprendido muchos años en diversos proyectos hizo que me transforme en un profesional versátil, capaz de trabajar con equipos multidisciplinarios y con la habilidad de gestionar eficazmente la ambigüedad de los proyectos complejos.
          </p>
        <p className="welcomeParagraphs">
          Con mi experiencia en tecnología y emprededurismo, sé que puedo aportar mis habilidades y conocimientos en pos de generar valor.
        </p>	         
      </div>
    </div>
  );
};

