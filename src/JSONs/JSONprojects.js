export const projectsData = [
  {
    name: "Pandora Backpacks",
    projectSummary: [
      "Pandora Mochilas es un ecommerce simulado de mochilas desarrollado en React con un formulario de contacto cuyos datos se persisten en firestore y el proceso de pago esta integrado con mercadopago.",
    ],
    projectDetails: [
      "Persiste los datos del carro de compras en el local storage para poder recuperar la información ante una recarga o cierre de la página. El evento que dispara la carga de datos al storage es el unload y en el load se descargan. Mientras la página está en uso con normalidad no se persisten los datos del carro en el storage. Si en un contexto global",
      "Se usaron métodos para que las imágenes no carguen una a una sino que el usuario vea las imágenes aparecer en un solo momento",
      "Mientras se espera que todo esté cargado para mostrarle al usuario se utilizaron estados loading para colocar un spinner en el proceso",
      "Hay un contexto global para los artículos agregados al carrito",
      "Las imágenes están hosteadas en un storage de imágenes",
      "Tanto los productos con todas sus características y rutas a recursos como las órdenes, se persisten en Firebase",
      "Se crearon dos escenarios para la finalización de una compra. El pago con tarjeta en el cual como última pantalla muestra el objeto que se le pasaría a MercadoPago en el caso que este proyecto hubiese montado un servidor y se hubiese integrado MercadoPago y la otra opción es una opción custom en el cual hay que dejar los datos para que el vendedor luego lo contacte, en el cual el ecommerce persiste en Firebase todos los productos de la transacción más los datos que completó el usuario en el formulario en una orden.",
      "Persiste los datos del carro de compras en el local storage para poder recuperar la información ante una recarga o cierre de la página. El evento que dispara la carga de datos al storage es el unload y en el load se descargan. Mientras la página está en uso con normalidad no se persisten los datos del carro en el storage. Si en un contexto global",
      "Se usaron métodos para que las imágenes no carguen una a una sino que el usuario vea las imágenes aparecer en un solo momento",
      "Mientras se espera que todo esté cargado para mostrarle al usuario se utilizaron estados loading para colocar un spinner en el proceso",
      "Hay un contexto global para los artículos agregados al carrito",
      "Las imágenes están hosteadas en un storage de imágenes",
      "Tanto los productos con todas sus características y rutas a recursos como las órdenes, se persisten en Firebase",
      "Se crearon dos escenarios para la finalización de una compra. El pago con tarjeta en el cual como última pantalla muestra el objeto que se le pasaría a MercadoPago en el caso que este proyecto hubiese montado un servidor y se hubiese integrado MercadoPago y la otra opción es una opción custom en el cual hay que dejar los datos para que el vendedor luego lo contacte, en el cual el ecommerce persiste en Firebase todos los productos de la transacción más los datos que completó el usuario en el formulario en una orden.",
    ],
    technologies: [
      { name: "HTML", iconSrc: "https://i.postimg.cc/kGPKdGc8/HtmlIcon.png" },
      { name: "CSS", iconSrc: "https://i.postimg.cc/3Rvm6mgY/cssIcon.png" },
      {
        name: "Javascript",
        iconSrc: "https://i.postimg.cc/7LHby70S/javascript-Icon.png",
      },
      {
        name: "React",
        iconSrc: "https://i.postimg.cc/MZ11m06Y/react-Icon.png",
      },
      {
        name: "Firebase",
        iconSrc: "https://i.postimg.cc/Kj7LcbqW/firebase-Icon.png",
      },
    ],
    desktopPreviews:
    [
      "https://i.postimg.cc/g0cyffCX/home-desktop-1.jpg",
      "https://i.postimg.cc/VkWBZYVP/home-desktop-2.jpg",
      "https://i.postimg.cc/28vxvdd6/colecciones-desktop-1.jpg",
      "https://i.postimg.cc/2j1GjNVn/carro-desktop-1.jpg"
    ],
      
    mobilePreviews:
    [
      "https://i.postimg.cc/5yQ6h39F/home-mobile-1.jpg",
      "https://i.postimg.cc/G90Hdy9g/home-mobile-2.jpg",
      "https://i.postimg.cc/C1zGKbLw/home-mobile-3.jpg",
      "https://i.postimg.cc/mDDcw40j/colecciones-mobile-1.jpg",
      "https://i.postimg.cc/FRBYCqv4/carro-mobile-1.jpg"
    ],      
    
    gitHubLink: "https://github.com/estebanaltamura/entregaFinal-Altamura",
    webSiteLink: "https://entrega-final-altamura.vercel.app/",
  },

  {
    name: "Flixfinder",
    projectSummary: [
      "Flixfinder es un buscador de contenidos audiovisuales desarrollado en react, con autenticacion mediante un servidor nodejs y persistencia de los datos de autenticacion y contenido favorito del usuario en firestore"     
    ],
    projectDetails: [
      "Flixfinder es una web que permite al usuario buscar contenido de cine y tv. Permite tambien crear un usuario y la posibilidad a partir de likear contenido de generar una seleccion del contenido favorito del usuario. Tambien permite compartir contenido en twitter y whatsapp",
      "Autenticación avanzada: Flixfinder cuenta con un sistema de autenticación, permitiendo a los usuarios registrar e ingresar con su usuario y contraseña. Todo esto respaldado por un servidor Node.js desplegado en AWS EC2, garantizando seguridad y escalabilidad.",
      "Interacción personalizada: Los usuarios registrados pueden marcar contenidos como favoritos con un 'like'. Estas preferencias se almacenan de manera segura en Firestore, creando una experiencia personalizada para cada usuario.",
      "Experiencia visual sin fisuras: El contenido visual se carga por completo antes de presentarlo, evitando imágenes parciales o cargas progresivas. Esto elimina el desorden visual, evita parpadeos y asegura una presentación excelente.",
      "Persistencia de los datos del usuario en el navegador: Mientras el usuario no se desloguee, el token y sus contenidos preferidos son persistidos en el local storage, para que en caso de que el usuario vuelva en el futuro no haya necesidad de loguearse otra vez. Al desloguearse se remueve toda informacion de la aplicacion en el local storage",
      "Respuesta ágil y actualizaciones asincrónicas: Cuando un usuario modifica su contenido favorito, se modifica su contexto global asociado, la aplicación responde instantáneamente reflejando el nuevo estado de ese contexto. Cada vez que hay un cambio en el contexto, firestore es actualizado en forma asincrona. Esto garantiza una experiencia de usuario fluida y rápida.",
      "Compartir contenido: Con Flixfinder, compartir tus contenidos favoritos es sencillo. Incorporamos funcionalidades para compartir a través de WhatsApp y Twitter. Mientras que para WhatsApp utilizamos react-share, en Twitter hemos implementado enlaces dinámicos para una integración sin problemas.",
    ],    
    technologies: [
      { name: "HTML", iconSrc: "https://i.postimg.cc/kGPKdGc8/HtmlIcon.png" },
      { name: "CSS", iconSrc: "https://i.postimg.cc/3Rvm6mgY/cssIcon.png" },
      {
        name: "Javascript",
        iconSrc: "https://i.postimg.cc/7LHby70S/javascript-Icon.png",
      },
      {
        name: "React",
        iconSrc: "https://i.postimg.cc/MZ11m06Y/react-Icon.png",
      },
      {
        name: "NodeJS",
        iconSrc: "https://i.postimg.cc/TP6KXTGL/node.png",
      },
      {
        name: "Bootstrap",
        iconSrc: "https://i.postimg.cc/3xZfQCDg/bootstrap.png",
      },
      {
        name: "Firebase",
        iconSrc: "https://i.postimg.cc/Kj7LcbqW/firebase-Icon.png",
      },
    ],
    desktopPreviews:
    [
      "https://i.postimg.cc/rFk9yRTg/movies-dashboard-desktop-flixfinder.jpg",
      "https://i.postimg.cc/sfScR9kv/favorites-desktop-flixfinder.jpg",
      "https://i.postimg.cc/cCQMM0RQ/login-desktop-flixfinder.jpg",
      "https://i.postimg.cc/V60Fvj5Z/create-account-desktop-flixfinder.jpg"
    ],
      
    mobilePreviews:
    [
      "https://i.postimg.cc/SR0fMJMS/movies-dashboard-mobile-flixfinder.jpg",
      "https://i.postimg.cc/Y9456rpn/movies-dashboard2-mobile-flixfinder.jpg",
      "https://i.postimg.cc/PqR4d6f8/login-mobile-flixfinder.jpg",
      "https://i.postimg.cc/tgTkQ0bj/create-account-mobile-flixfinder.jpg",
    ],      
    
    gitHubLink: "https://github.com/estebanaltamura/flixfinder",
    webSiteLink: "https://flixfinder.online/",
  },

  {
    name: "Actas italianas express",
    projectSummary: [
      "Actas italianas express es un proyecto que brinda el servicio de gestion del acta italiana del antepasado del interesado que busca obtener su ciudadania italiana en argentina"      
    ],
    projectDetails: [
      "Actas Italianas Express es un proyecto innovador que busca simplificar el proceso de solicitud y obtención de actas italianas para aquellos interesados. Con una plataforma digital eficiente y de fácil acceso, los usuarios pueden dejar su información para ser contactados posteriormente o, si lo prefieren, pueden iniciar una conversación instantánea a través de WhatsApp.",
      "El proyecto, desarrollado con React, incorpora varias dependencias clave para su funcionamiento, entre las que se incluyen Firestore, SweetAlert2, React-Icons, React-Bootstrap y Lottie-React. La utilización de Firestore permite la persistencia de los datos de los leads.", 
      "Se ha prestado especial a la carga, garantizando que nunca se muestre contenido parcial o desordenado, lo que asegura una experiencia de usuario óptima en todo momento.",
      "Durante la prueba comercial del proyecto, se realizo una campaña de publicidad en Instagram que generaro un total de 48 leads. De estos, 40 proporcionaron tanto su correo electrónico como su número de teléfono, mientras que 8 solo proporcionaron su dirección de correo electrónico. Como resultado de estas interacciones, se establecieron 26 conversaciones de leads que contestaron mi contacto a través de WhatsApp", 
      "De las 26 conversaciones abiertas 7 resultaron en conversaciones con leads que tenian toda la información necesaria para procesar su solicitud de acta.",
      "Finalmente, se realizó una venta con un costo de adquisición de U$D 17.28 y un retorno sobre la inversión en publicidad (ROAS) de 4.5."      
      
    ],
    technologies: [
      { name: "HTML", iconSrc: "https://i.postimg.cc/kGPKdGc8/HtmlIcon.png" },
      { name: "CSS", iconSrc: "https://i.postimg.cc/3Rvm6mgY/cssIcon.png" },
      { name: "Javascript", iconSrc: "https://i.postimg.cc/7LHby70S/javascript-Icon.png" },
      { name: "React", iconSrc: "https://i.postimg.cc/MZ11m06Y/react-Icon.png" },
      { name: "Firebase", iconSrc: "https://i.postimg.cc/Kj7LcbqW/firebase-Icon.png" }
    ],
    desktopPreviews:
    [ 
      "https://i.postimg.cc/T1yQW0DK/actas-Italianas-Home-Desktop1.jpg",
      "https://i.postimg.cc/85Xt59j8/actas-Italianas-Home-Desktop2.jpg",
      "https://i.postimg.cc/Y9CdtM2f/actas-Italianas-Whatsapp-Contacto-Desktop1.jpg"    
    ],
      
    mobilePreviews:
    [
      "https://i.postimg.cc/bvT6XsPw/actas-Italianas-Home-Mobile1.jpg",
      "https://i.postimg.cc/ncySByTp/actas-Italianas-Home-Mobile2.jpg",
      "https://i.postimg.cc/rw5nJfYW/actas-Italianas-Whatsapp-Contacto-Mobile1.jpg"
    ],
      
    
    gitHubLink: "https://github.com/estebanaltamura/actasitalianasexpress",
    webSiteLink: "https://actasitalianasexpress.com/",
  }
];


