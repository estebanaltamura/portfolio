export const projectsData = [
  {
    name: "Pandora Backpacks",
    projectSummary: [
      "Pandora Mochilas es un ecommerce simulado de mochilas desarrollado en React que integra todos los procesos menos la integración con un medio de pago.",
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
      "FLIXFINDER es una web que permite buscar series y peliculas. Tambien el usuario puede crear un usuario para poder likear peliculas y generar su propia seleccion de contenidos favoritos"     
    ],
    projectDetails: [
      "PANDORA backpacks is a project which is a whole e-commerce developed in React using Firebase to saved the information of orders and products",
      "PANDORA backpacks is a project which is a whole e-commerce developed in React using Firebase to saved the information of orders and products",
      "PANDORA backpacks is a project which is a whole e-commerce developed in React using Firebase to saved the information of orders and products",
      "PANDORA backpacks is a project which is a whole e-commerce developed in React using Firebase to saved the information of orders and products",
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
      "Durante la prueba comercial del proyecto, se realizo una campaña de publicidad en Instagram que generaro un total de 48 leads. De estos, 40 proporcionaron tanto su correo electrónico como su número de teléfono, mientras que 8 solo proporcionaron su dirección de correo electrónico. Como resultado de estas interacciones, se establecieron 26 conversaciones de leads que contestaron mi contacto a través de WhatsApp", 
      "De las 26 conversaciones abiertas 7 resultaron en conversaciones con leads que tenian toda la información necesaria para procesar su solicitud de acta.",
      "Finalmente, se realizó una venta con un costo de adquisición de U$D 17.28 y un retorno sobre la inversión en publicidad (ROAS) de 4.5.",      
      "El proyecto, desarrollado con React, incorpora varias dependencias clave para su funcionamiento, entre las que se incluyen Firestore, SweetAlert2, React-Icons, React-Bootstrap y Lottie-React. La utilización de Firestore permite la persistencia de los datos de los leads.", 
      "Se ha prestado especial a la carga, garantizando que nunca se muestre contenido parcial o desordenado, lo que asegura una experiencia de usuario óptima en todo momento."
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

/*
TECNOLOGIAS:

Opciones en texto:
HTML
CSS
JAVASCRIPT
REACT
FIREBASE

Opciones iconos:
HTML:       https://i.postimg.cc/kGPKdGc8/HtmlIcon.png
CSS:        https://i.postimg.cc/3Rvm6mgY/cssIcon.png
Javascript: https://i.postimg.cc/7LHby70S/javascript-Icon.png
React:      https://i.postimg.cc/MZ11m06Y/react-Icon.png
Firebase:   https://i.postimg.cc/Kj7LcbqW/firebase-Icon.png




imagenes o videos
mobile 220x410 desktop 700x410

No pueden haber imagenes repetidas entre proyectos

*/
