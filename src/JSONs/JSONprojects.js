export const projectsData = [
  {
    name: "Pandora Backpacks",
    projectSummary: [
      "Pandora Mochilas es un ecommerce de mochilas desarrollado en React con un formulario de contacto cuyos datos se persisten en firestore y el proceso de pago esta integrado con mercadopago.",
    ],
    projectDetails: [
      "Pandora es un e-commerce completo de venta de mochilas. Tiene un carro de compras en el que se puede pagar con mercadopago (provéo credenciales de prueba para quien quiera testear) y un método de orden de compra personalizada, en el que el usuario deja sus datos en un formulario",
      "Se prestó especial atención a la experiencia de usuario en el sentido del contenido mostrado en cada momento. Nunca se muestra imágenes en proceso de carga, de rederizado, ni el dom desordenado. Mientras las imágenes no están 100% disponibles, se muestra un spinner y cuando todo realmente esta cargado y renderizado, se muestra el contenido.",
      "Los productos agregados al carrito se persisten en un contexto global y en el local storage. Se utiliza el local storage para que ante un cierre deseado o no, los datos puedan ser recuperados apenas el usuario retorna a la pagina.",
      "Se desarrolló un servidor en nodeJS, implementado en una instancia EC2 de AWS, el cual sirve para interactuar con la api de mercadopago.",
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
      ["img", "https://i.postimg.cc/59TwQ41h/pandora-Home-Desktop.jpg"],
      ["img", "https://i.postimg.cc/LX0jTRPZ/pandora-Collection-Desktop.jpg"],
      ["img", "https://i.postimg.cc/4yDtD5Bf/pandora-Product-Desktop.jpg"],
      ["img", "https://i.postimg.cc/1tzpw48Q/pandora-Cart-Desktop.jpg"],
      ["img", "https://i.postimg.cc/6q2nbSVb/pandora-MPDesktop.jpg"]
    ],
      
    mobilePreviews:
    [
      ["img", "https://i.postimg.cc/766xgJSw/pandora-Home-Mobile.jpg"],
      ["img", "https://i.postimg.cc/8CwpJmJZ/pandora-Collection-Mobile.jpg"],
      ["img", "https://i.postimg.cc/tTM9DRzP/pandora-Product-Mobile.jpg"],
      ["img", "https://i.postimg.cc/PJvT7G67/pandora-Cart-Mobile.jpg"],
      ["img", "https://i.postimg.cc/XvnNYzJZ/pandora-MPMobile.jpg"]
    ],      
    
    gitHubLink: "https://github.com/estebanaltamura/pandora-backpacks",
    webSiteLink: "https://pandorabackpacks.online/",
  },

  {
    name: "Flixfinder",
    projectSummary: [
      "Flixfinder es un buscador de contenidos audiovisuales desarrollado en react, con autenticación mediante un servidor desarrollado en nodejs y persistencia de los datos de autenticación y contenidos favoritos del usuario en firestore"     
    ],
    projectDetails: [
      "Flixfinder es una web que permite al usuario buscar contenido de cine y tv. Permite también crear un usuario y la posibilidad a partir de likear contenido de generar una selección de su contenido favorito. También permite compartir contenido en twitter y whatsapp.",
      "Flixfinder cuenta con un sistema de autenticación, permitiendo a los usuarios registrar e ingresar con su usuario y contraseña. Todo esto respaldado por un servidor Node.js desplegado en AWS EC2, garantizando seguridad y escalabilidad.",
      "Los usuarios registrados pueden marcar contenidos como favoritos con un 'like'. Estas preferencias se almacenan de manera segura en Firestore, creando una experiencia personalizada para cada usuario.",
      "El contenido visual se carga por completo antes de presentarlo, evitando imágenes parciales o cargas progresivas. Esto elimina el desorden visual, evita parpadeos y asegura una presentación excelente.",
      "Mientras el usuario no se desloguee, el token y sus contenidos preferidos son persistidos en el local storage, para que en caso de que el usuario vuelva en el futuro no haya necesidad de loguearse otra vez. Al desloguearse se remueve toda información de la aplicación en el local storage.",
      "Cuando un usuario modifica su contenido favorito, se modifica su contexto global asociado, la aplicación responde instantáneamente reflejando el nuevo estado de ese contexto. Cada vez que hay un cambio en el contexto, firestore es actualizado en forma asincrona. Esto garantiza una experiencia de usuario fluida y rápida.",
      "Compartir contenidos favoritos es sencillo. El proyecto incorporo funcionalidades para compartir a través de WhatsApp y Twitter. Mientras que para WhatsApp utilicé react-share, en Twitter implementé enlaces dinámicos para una integración sin problemas.",
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
      ["img", "https://i.postimg.cc/sDSm6cBz/movies-dashboard-desktop-flixfinder.jpg"],
      ["img", "https://i.postimg.cc/sfScR9kv/favorites-desktop-flixfinder.jpg"],
      ["img", "https://i.postimg.cc/cCQMM0RQ/login-desktop-flixfinder.jpg"],
      ["img", "https://i.postimg.cc/V60Fvj5Z/create-account-desktop-flixfinder.jpg"]
    ],
      
    mobilePreviews:
    [
      ["img", "https://i.postimg.cc/GtcC92Tg/movies-dashboard-mobile-flixfinder.jpg"],
      ["img", "https://i.postimg.cc/7hmyzkgH/movies-dashboard2-mobile-flixfinder.jpg"],
      ["img", "https://i.postimg.cc/PqR4d6f8/login-mobile-flixfinder.jpg"],
      ["img", "https://i.postimg.cc/rz6dR5cC/create-account-mobile-flixfinder.jpg"],
    ],      
    
    gitHubLink: "https://github.com/estebanaltamura/flixfinder",
    webSiteLink: "https://flixfinder.online/",
  },

  {
    name: "Actas italianas express",
    projectSummary: [
      "Actas italianas express es un proyecto desarrollado en react, que brinda el servicio de gestión del acta italiana del antepasado del interesado que busca como fin último obtener su ciudadanía italiana en argentina"      
    ],
    projectDetails: [
      "Actas Italianas Express busca simplificar el proceso de solicitud y obtención de actas italianas para aquellos interesados. Con una plataforma digital eficiente y de fácil acceso, los usuarios pueden dejar su información para ser contactados posteriormente o, si lo prefieren, pueden iniciar una conversación instantánea a través de WhatsApp.",
      "Se ha prestado especial atención a la carga de imágenes, garantizando que nunca se muestre contenido parcial o desordenado, lo que asegura una experiencia de usuario óptima en todo momento.",
      "Durante la prueba comercial del proyecto, se realizo una campaña de publicidad en Instagram que genero un total de 48 leads. De estos, 40 proporcionaron tanto su correo electrónico como su número de teléfono, mientras que 8 solo proporcionaron su dirección de correo electrónico. Como resultado de estas interacciones, se establecieron 26 conversaciones con leads que contestaron mi contacto a través de WhatsApp", 
      "De las 26 conversaciones abiertas 7 resultaron en conversaciones con leads que tenían toda la información necesaria para procesar su solicitud de acta.",
      "Finalmente, se realizó una venta con un costo de adquisición de U$D 17.28 y un retorno sobre la inversión en publicidad (ROAS) de 4.5.", 
      "A partir de entonces, activé el marketing digital en ocasiones para generar nuevas ventas y las metricas se mantuvieron casi identicas.",     
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
      ["img", "https://i.postimg.cc/T1yQW0DK/actas-Italianas-Home-Desktop1.jpg"],
      ["img", "https://i.postimg.cc/85Xt59j8/actas-Italianas-Home-Desktop2.jpg"],
      ["img", "https://i.postimg.cc/Y9CdtM2f/actas-Italianas-Whatsapp-Contacto-Desktop1.jpg"]    
    ],
      
    mobilePreviews:
    [
      ["img", "https://i.postimg.cc/bvT6XsPw/actas-Italianas-Home-Mobile1.jpg"],
      ["img", "https://i.postimg.cc/ncySByTp/actas-Italianas-Home-Mobile2.jpg"],
      ["img", "https://i.postimg.cc/rw5nJfYW/actas-Italianas-Whatsapp-Contacto-Mobile1.jpg"]
    ],      
    
    gitHubLink: "https://github.com/estebanaltamura/actas-italianas-express",
    webSiteLink: "https://actasitalianasexpress.com/",
  },
  {
    name: "Plumarii",
    projectSummary: [
      "Plumarii fue un e-commerce dedicado a la venta de indumentaria femenina personalizada, con gestión remota y logística automatizada, apuntado al mercado estadounidense"      
    ],
    projectDetails: [
      "Plumarii desde el comienzo fué un desafío. Nuestra idea original fue generar una propuesta valiosa para consumidoras americanas, ofrecida de forma 100% online y cumplimentando el procesamiento y despacho de las órdenes de compra de forma 100% automatizada.",
      "Como base administativa montamos una empresa en el estado de Florida.", 
      "Investigamos mucho sobre el gusto de las consumidoras de nuestro target, como así tambien investigamos la forma en que ese target consumía el contenido relacionado a propuestas similares.",
      "En septiembre de 2021, realizamos un viaje a Estados unidos donde terminamos de desarrollar proveedores de servicios, productos e insumos que fueron vitales para completar nuestra primera propuesta viable.",      
      "También en ese viaje logramos cerrar un trato con un depósito completamente automatizado para el cumplimiento de órdenes de compra. Ese proveedor de logistica nos permitía conectarnos mediante su api. Ante la detección de una venta, no requerían de nuestra autorización puntual para cumplimentar la orden de forma automatica, ya que por integraciones, configuraciones previas y haber enviado la mercadería a su deposito cumpliendo con un protocolo de códigos de barras, todo funcionaba.",
      "Uno de los desafíos permanentes fue la personalización diaria de la página, ya que probamos muchísimas propuestas para optimizar los resultados. Nuestra página (plumarii.com) hoy dia no está vigente, pero en en el carrousel de imágenes dejo screens de varias pantallas, como asi también imágenes del proyecto en general y anuncios en formato video.",
      "La plataforma que utlizamos fue shopify. El motivo principal no fue la facilidad para el diseño, sinó que nos brindaba medios de pagos integrados en estados unidos y la posibilidad de conectarnos a la api del proveedor de logística.",
      "Shopify fue bastante frustrante para su edición desde el código, ya que además de utilizar HTML, CSS y Javascript, utilizaba Ruby on Rails y Liquid (el cual es un lenguaje particular creado por shopify). A pesar de eso, logré conseguir un diseño muy usable y apreciado, ya que las métricas de compra, de marketing digital, métricas propias personalizadas basadas en el flujo de uso del cliente y grabaciones de hotjar lo comprobaron.",
      "El instagram de plumarii aun abierto es: https://www.instagram.com/plumariiok/"
    ],
    technologies: [ 
      { name: "HTML", iconSrc: "https://i.postimg.cc/kGPKdGc8/HtmlIcon.png" },
      { name: "CSS", iconSrc: "https://i.postimg.cc/3Rvm6mgY/cssIcon.png" },
      { name: "Javascript", iconSrc: "https://i.postimg.cc/7LHby70S/javascript-Icon.png" }    
    ],
    desktopPreviews:
    [   
      ["img", "https://i.postimg.cc/QtJGxgrQ/no-Image-Desktop.jpg"]      
    ],
      
    mobilePreviews:
    [
      ["img", "https://i.postimg.cc/bvgBvWH3/home-Plumarii1.jpg"],
      ["img", "https://i.postimg.cc/2jwWH0qY/home-Plumarii2.jpg"],
      ["img", "https://i.postimg.cc/Fz9LrLBw/home-Plumarii3.jpg"], 
      ["img", "https://i.postimg.cc/kgZY2J9T/home-Plumarii4.jpg"],
      ["img", "https://i.postimg.cc/qMv3W2n3/home-Plumarii5.jpg"],
      ["img", "https://i.postimg.cc/dtNyFDmS/home-Plumarii6.jpg"],
      ["img", "https://i.postimg.cc/mk8Ftrxk/home-Plumarii7.jpg"],
      ["img", "https://i.postimg.cc/3RZkcwx1/collections-Plumarii1.jpg"],
      ["img", "https://i.postimg.cc/mD4cj9Bh/products-Plumarii1.jpg"],
      ["img", "https://i.postimg.cc/6Qn2CcsD/cart-Plumarii1.jpg"],
      ["img", "https://i.postimg.cc/2SqBSm0j/institucional-Plumarii1.jpg"],
      ["img", "https://i.postimg.cc/9Qvw4Skd/institucional-Plumarii2.jpg"],
      ["video", "https://player.vimeo.com/video/856401646"], 
      ["video", "https://player.vimeo.com/video/856401787"],
      ["video", "https://player.vimeo.com/video/856401820"],
      ["video", "https://player.vimeo.com/video/856401854"],
      ["video", "https://player.vimeo.com/video/856401902"],
      ["video", "https://player.vimeo.com/video/856401955"],
      ["video", "https://player.vimeo.com/video/856401996"],
    ],      
    
    gitHubLink: "",
    webSiteLink: "",
  }
];


