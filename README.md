# Tienda Express
¡Bienvenido al proyecto de Ecommerce de Ropa de Hombre y Mujer!

## Descricion
Este proyecto es un sitio web de comercio electrónico dedicado a la venta de ropa para hombres y mujeres. La plataforma está construida utilizando tecnologías web modernas como React y Firebase para proporcionar una experiencia de usuario fluida y segura.

## Tecnologías utilizadas
- Vite
- React
- React Router
- Firebase

## Funcionalidades
- Ver una lista de productos disponibles
- Agregar productos al carrito de compras
- Ver el carrito de compras
- Realizar una orden de compra que se almacenan en Firebase.

## Instalación

Para comenzar con el proyecto, asegúrese de tener Node.js y npm (Node Package Manager) instalados en su sistema. 

### Para instalar y ejecutar la aplicación en tu máquina local, sigue los siguientes pasos:

1. Clona el repositorio "https://github.com/CaroContrerasAR/PF-Contreras-Carolina.git" a tu máquina local.
2. Abre una terminal en el directorio del proyecto.
3. Ejecuta el comando npm install para instalar las dependencias.
4. Ejecuta el comando npm run dev para iniciar la aplicación.
5. Abre tu navegador y navega a http://localhost:5173 para ver la aplicación en acción.

## Dependencias
Las siguientes dependencias son necesarias para ejecutar este proyecto:

dotenv: ^16.3.1
firebase: ^10.1.0
react: ^18.2.0
react-dom: ^18.2.0
react-router-dom: ^6.14.1
Estas dependencias se instalaron automáticamente cuando ejecutó npm install siguiendo los pasos de instalación.

## Configuración de Firebase

### Para utilizar Firebase en esta aplicación, debes seguir los siguientes pasos:

1. Crea una cuenta en Firebase y crea un nuevo proyecto.
2. En la sección "Authentication" de Firebase, habilita el proveedor de 3. autenticación de correo electrónico y contraseña.
4. En la sección "Firestore" de Firebase, crea una nueva base de datos y configura las reglas de seguridad para permitir lectura/escritura solamente a usuarios autenticados.
5. En la sección "Project settings" de Firebase, haz clic en "Add app" y sigue las instrucciones para agregar una nueva aplicación web.
6. Copia las credenciales de Firebase y configura las variables de entorno en el archivo .env de tu proyecto utilizando el siguiente formato:

VITE_FIREBASE_API_KEY=Tu_api_key

## Estructura del Proyecto

El proyecto está organizado en diferentes carpetas y archivos. A continuación, se describe la estructura general:

- public/
    - img/
- src/
  - components/
    - Cart
    - CartItem
    - CartWidget
    - Checkout
    - Footer
    - Item
    - ItemCount
    - ItemDetail
    - ItemDetailContainer
    - ItemList
    - ItemListCotainer
    - NavBar
 - context/
    - CarritoContext.jsx
 - services/
    - config.js
  - App.jsx
  - main.jsx
- .env
- index.html
- .gitignore
- favicon.ico
- package.json
- ...
- README.md

La raiz contiene el archivo index.html, que es el punto de entrada del proyecto.
La carpeta src contiene todo el código fuente del proyecto.
La carpeta componentes contiene los componentes reutilizables que se utilizan en diferentes páginas.
La carpeta services contiene el archivo config.js, donde se configura la conexión con Firebase.
App.jsx es el componente principal que define la estructura general de la aplicación y las rutas.
main.jsx es el punto de entrada de React donde se renderiza la aplicación en el DOM.

## Contribución
¡Agradecemos cualquier contribución que desee hacer al proyecto! Si desea informar problemas, enviar solicitudes de funciones o contribuir directamente al código, siga estos pasos:

1. Forkee el repositorio y clónelo en su máquina local.
2. Cree una nueva rama para su contribución.
3. Realice los cambios y pruebas necesarias en su rama local.
4. Envíe una solicitud de extracción (pull request) a la rama principal del repositorio.

## Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más información.