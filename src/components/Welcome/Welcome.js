import './Welcome.css';

export const Welcome = () => {
  return (
    <div className='welcomeContainer'>
      <h2 className='welcomeTitle'>Hola.</h2>
      <div className='paragraphsContainer'>
        <p className='welcomeParagraphs'>
          Mi nombre es Andrés, soy desarrollador Frontend React-Typescript.
        </p>
        <p className='welcomeParagraphs'>
          Soy desarrollador Frontend, tengo un perfil startup, me gustan los
          emprendimientos, creo en los procesos ágiles, dinámicos y de mucha
          iteración con los usuarios y el mercado.
        </p>
        <p className='welcomeParagraphs'>
          En los últimos años trabajé en una incubadora de negocios como
          referente tecnológico, co-fundé una empresa de venta de indumentaria
          en Argentina con excelente posicionamiento y solidas ventas. Tambien
          co-fundé una empresa de venta de indumentaria en Estados Unidos. En
          esta última experiencia casi quiebro, pero entendí que esto es lo mio,
          me encanta emprender y el proceso startup en su conjunto.
        </p>
        <p className='welcomeParagraphs'>
          Haber emprendido muchos años en diversos proyectos y trabajado en
          ecosistemas de negocios hizo que me transforme en un profesional
          versátil, capaz de trabajar con equipos multidisciplinarios y con la
          habilidad de gestionar eficazmente la ambigüedad y la dinámica de los
          proyectos complejos.
        </p>
      </div>
    </div>
  );
};
