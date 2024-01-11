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
          Soy un perfil startup, me gustan los emprendimientos, creo en los
          procesos agiles, dinamicos y de mucha iteracion con los usuarios y el
          mercado.
        </p>
        <p className='welcomeParagraphs'>
          En los últimos años trabaje en una incubadora de negocios como
          referente tecnologico, co-fundé una empresa de venta de indumentaria
          en los Estados Unidos, la cual fue un desafio enorme y en la cual
          aprendí y profundice cantidad de skills. También co-fundé una empresa
          de venta de indumentaria en Argentina de buen posicionamiento y
          solidas ventas.
        </p>
        <p className='welcomeParagraphs'>
          Haber emprendido muchos años en diversos proyectos y trabajado en
          ecosistemas de negocios hizo que me transforme en un profesional
          versátil, capaz de trabajar con equipos multidisciplinarios y con la
          habilidad de gestionar eficazmente la ambigüedad y la dinamica de los
          proyectos complejos.
        </p>
      </div>
    </div>
  );
};
