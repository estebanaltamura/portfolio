import "./Welcome.css";

export const Welcome = () => {
  return (
    <div className="welcomeContainer">
      <h2 className="welcomeTitle">Hola.</h2>
      <div className="paragraphsContainer">
        <p className="welcomeParagraphs">Soy Andrés Altamura.
        </p>
        <p className="welcomeParagraphs">
           De chico me conecté con el desarrollo y el mundo de la computación pero no profundicé. En los últimos años empecé a codear de nuevo y me di cuenta que es algo que me apasiona. A raíz de esto apliqué todos mis conocimientos y co-fundé una empresa de venta de indumentaria en los Estados Unidos que implicó un desafío enorme. 
        </p>
        <p className="welcomeParagraphs">Haber emprendido muchos años en diversos proyectos hicieron que me transforme en un profesional versátil, capaz de trabajar con equipos multidisciplinarios y desarrollando la habilidad de gestionar eficazmente la ambigüedad de los proyectos complejos. 
        </p>
        <p className="welcomeParagraphs">
        Con mi experiencia en tecnología y emprendimiento sé que puedo aportar mis habilidades y conocimientos a cualquier empresa.
        </p>	         
      </div>
    </div>
  );
};
