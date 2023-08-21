export const projectsData = [
  {
    name: "Pandora Backpacks",
    projectSummary: [
      "Pandora Mochilas es un ecommerce simulado de mochilas desarrollado en React con un formulario de contacto cuyos datos se persisten en firestore y el proceso de pago esta integrado con mercadopago.",
    ],
    projectDetails: [
      "Pandora es un e-commerce completo de venta de mochilas. Tiene un carro de compras en el que se puede pagar con mercadopago (provéo credenciales de prueba para quien quiera testear) y un método de orden de compra personalizada, en el que el usuario deja sus datos en un formulario",
      "Se presto especial atención a la experiencia de usuario en el sentido del contenido mostrado en cada momento. Nunca se muestra imagenes en proceso de carga, de rederizado, ni el dom desordenado. Mientras las imágenes no estan 100% disponibles se muestra un spinner y cuando todo realmente esta cargado y renderizado, se muestra el contenido.",
      "Los productos agregados al carrito se persisten en un contexto global y en el local storage. Se utiliza el local storage para que ante un cierre deseado o no, los datos puedan ser recuperados apenas el usuario retorna a la pagina.",
      "Se desarrollo un servidor en nodeJS, implementado en una instancia EC2 de AWS, el cual sirve para interactuar con la api de mercadopago.",
      "Los datos que deja el usuario en el formulario de contacto para pago manual, junto con la información de la orden de compra, son persistidos en firestore, para que luego el vendedor se contacte con el usuario para finalizar la compra.",
      "Las dependencias utilizadas fueron: react-router-dom, firebase, bootstrap, react-icons, uuid, sweetalert2"      
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
      { name: "MP", iconSrc: "https://i.postimg.cc/rs0BxZZx/mercadopago.png" },  
      {
        name: "Firebase",
        iconSrc: "https://i.postimg.cc/Kj7LcbqW/firebase-Icon.png",
      },
    ],
    desktopPreviews:
    [
      "https://i.postimg.cc/59TwQ41h/pandora-Home-Desktop.jpg",
      "https://i.postimg.cc/LX0jTRPZ/pandora-Collection-Desktop.jpg",
      "https://i.postimg.cc/4yDtD5Bf/pandora-Product-Desktop.jpg",
      "https://i.postimg.cc/1tzpw48Q/pandora-Cart-Desktop.jpg",
      "https://i.postimg.cc/6q2nbSVb/pandora-MPDesktop.jpg"
    ],
      
    mobilePreviews:
    [
      "https://i.postimg.cc/766xgJSw/pandora-Home-Mobile.jpg",
      "https://i.postimg.cc/8CwpJmJZ/pandora-Collection-Mobile.jpg",
      "https://i.postimg.cc/tTM9DRzP/pandora-Product-Mobile.jpg",
      "https://i.postimg.cc/PJvT7G67/pandora-Cart-Mobile.jpg",
      "https://i.postimg.cc/XvnNYzJZ/pandora-MPMobile.jpg"
    ],      
    
    gitHubLink: "https://github.com/estebanaltamura/pandoraBackpacks",
    webSiteLink: "https://pandorabackpacks.online/",
  },

  {
    name: "Flixfinder",
    projectSummary: [
      "Flixfinder es un buscador de contenidos audiovisuales desarrollado en react, con autenticacion mediante un servidor desarrollado en nodejs y persistencia de los datos de autenticacion y contenidos favoritos del usuario en firestore"     
    ],
    projectDetails: [
      "Flixfinder es una web que permite al usuario buscar contenido de cine y tv. Permite tambien crear un usuario y la posibilidad a partir de likear contenido de generar una seleccion de su contenido favorito. Tambien permite compartir contenido en twitter y whatsapp",
      "Autenticación avanzada: Flixfinder cuenta con un sistema de autenticación, permitiendo a los usuarios registrar e ingresar con su usuario y contraseña. Todo esto respaldado por un servidor Node.js desplegado en AWS EC2, garantizando seguridad y escalabilidad.",
      "Interacción personalizada: Los usuarios registrados pueden marcar contenidos como favoritos con un 'like'. Estas preferencias se almacenan de manera segura en Firestore, creando una experiencia personalizada para cada usuario.",
      "Experiencia visual sin fisuras: El contenido visual se carga por completo antes de presentarlo, evitando imágenes parciales o cargas progresivas. Esto elimina el desorden visual, evita parpadeos y asegura una presentación excelente.",
      "Persistencia de los datos del usuario en el navegador: Mientras el usuario no se desloguee, el token y sus contenidos preferidos son persistidos en el local storage, para que en caso de que el usuario vuelva en el futuro no haya necesidad de loguearse otra vez. Al desloguearse se remueve toda informacion de la aplicacion en el local storage",
      "Respuesta ágil y actualizaciones asincrónicas: Cuando un usuario modifica su contenido favorito, se modifica su contexto global asociado, la aplicación responde instantáneamente reflejando el nuevo estado de ese contexto. Cada vez que hay un cambio en el contexto, firestore es actualizado en forma asincrona. Esto garantiza una experiencia de usuario fluida y rápida.",
      "Compartir contenido: Con Flixfinder, compartir tus contenidos favoritos es sencillo. El proyecto incorporo funcionalidades para compartir a través de WhatsApp y Twitter. Mientras que para WhatsApp utilice react-share, en Twitter implemente enlaces dinámicos para una integración sin problemas.",
      "Las dependencias utilizadas fueron: react-router-dom, axios, lottie-react, firebase, bootstrap, react-icons, uuid, react-copy-to-clipboard, sweetalert2" 
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
      "https://i.postimg.cc/sDSm6cBz/movies-dashboard-desktop-flixfinder.jpg",
      "https://i.postimg.cc/sfScR9kv/favorites-desktop-flixfinder.jpg",
      "https://i.postimg.cc/cCQMM0RQ/login-desktop-flixfinder.jpg",
      "https://i.postimg.cc/V60Fvj5Z/create-account-desktop-flixfinder.jpg"
    ],
      
    mobilePreviews:
    [
      "https://i.postimg.cc/GtcC92Tg/movies-dashboard-mobile-flixfinder.jpg",
      "https://i.postimg.cc/7hmyzkgH/movies-dashboard2-mobile-flixfinder.jpg",
      "https://i.postimg.cc/PqR4d6f8/login-mobile-flixfinder.jpg",
      "https://i.postimg.cc/rz6dR5cC/create-account-mobile-flixfinder.jpg",
    ],      
    
    gitHubLink: "https://github.com/estebanaltamura/flixfinder",
    webSiteLink: "https://flixfinder.online/",
  },

  {
    name: "Actas italianas express",
    projectSummary: [
      "Actas italianas express es un proyecto desarrollado en react, que brinda el servicio de gestion del acta italiana del antepasado del interesado que busca como fin ultimo obtener su ciudadania italiana en argentina"      
    ],
    projectDetails: [
      "Actas Italianas Express busca simplificar el proceso de solicitud y obtención de actas italianas para aquellos interesados. Con una plataforma digital eficiente y de fácil acceso, los usuarios pueden dejar su información para ser contactados posteriormente o, si lo prefieren, pueden iniciar una conversación instantánea a través de WhatsApp.",
      "Se ha prestado especial a la carga, garantizando que nunca se muestre contenido parcial o desordenado, lo que asegura una experiencia de usuario óptima en todo momento.",
      "Durante la prueba comercial del proyecto, se realizo una campaña de publicidad en Instagram que genero un total de 48 leads. De estos, 40 proporcionaron tanto su correo electrónico como su número de teléfono, mientras que 8 solo proporcionaron su dirección de correo electrónico. Como resultado de estas interacciones, se establecieron 26 conversaciones con leads que contestaron mi contacto a través de WhatsApp", 
      "De las 26 conversaciones abiertas 7 resultaron en conversaciones con leads que tenian toda la información necesaria para procesar su solicitud de acta.",
      "Finalmente, se realizó una venta con un costo de adquisición de U$D 17.28 y un retorno sobre la inversión en publicidad (ROAS) de 4.5.",      
      "Las dependencias utilizadas fueron: react-router-dom, lottie-react, firebase, bootstrap, react-icons, react-copy-to-clipboard, sweetalert2" 
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
  },
  {
    name: "Plumarii",
    projectSummary: [
      "Plumarii Plumarii Plumarii Plumarii Plumarii "      
    ],
    projectDetails: [
      "Plumarii Plumarii Plumarii Plumarii Plumarii ",
      "Plumarii Plumarii Plumarii Plumarii Plumarii Plumarii ", 
      "Plumarii Plumarii Plumarii Plumarii Plumarii Plumarii Plumarii ",
      "Plumarii Plumarii Plumarii Plumarii Plumarii Plumarii Plumarii ",      
      "Plumarii Plumarii Plumarii Plumarii Plumarii Plumarii Plumarii Plumarii Plumarii " 
    ],
    technologies: [     
    ],
    desktopPreviews:
    [   
      "https://i.postimg.cc/QtJGxgrQ/no-Image-Desktop.jpg"
    ],
      
    mobilePreviews:
    [
      "https://i.postimg.cc/2SCQhcCg/home-Plumarii1.jpg",
      
    ],      
    
    gitHubLink: "",
    webSiteLink: "",
  }
];


