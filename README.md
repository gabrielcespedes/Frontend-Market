# Marketplace de Obras Digitales

## Descripción

ArtMarket es una plataforma en línea que permite a los artistas vender y comprar obras digitales, como fotografías e ilustraciones. Los usuarios pueden explorar una amplia variedad de obras creadas por artistas talentosos y verificados, y tienen la posibilidad de guardar sus obras favoritas.

## Características

- Registro y inicio de sesión de usuarios.
- Perfiles de artistas verificados promocionados en la página principal.
- Subida y venta de obras digitales por parte de los usuarios.
- Exploración de obras de artistas verificados y no verificados.
- Sección de favoritos para guardar obras que llamen la atención.
- Carrito de compras para adquirir obras digitales.

## Tecnologías Utilizadas

### Frontend
- React
- Axios
- React Bootstrap
- React Router

### Backend
- Node.js
- Express
- Bcrypt
- CORS
- JSON Web Tokens (JWT)
- PostgreSQL

## Instalación

1. Clona este repositorio en tu máquina local.
2. Navega a la carpeta del frontend y ejecuta `npm install` para instalar las dependencias.
3. Navega a la carpeta del backend y ejecuta `npm install` para instalar las dependencias.
4. Configura la base de datos PostgreSQL con las credenciales adecuadas y asegúrate de que el servidor esté en funcionamiento.
5. Ejecuta `npm run dev` en el backend y `npm start` en el frontend para iniciar la aplicación.

## Autenticación

Para probar la autenticación, puedes usar los siguientes endpoints:

### Registro de Usuario

- Método: POST
- URL: localhost:3000/auth/register
- Cuerpo de la solicitud (JSON):
  ```
  {
    "username": "test",
    "email": "test@mail.com",
    "password": "test"
  }
  ```

### Inicio de Sesión

- Método: POST
- URL: localhost:3000/auth/login
- Cuerpo de la solicitud (JSON):
  ```
  {
    "email": "test@mail.com",
    "password": "test"
  }
  ```

## Creación de Obras de Arte

Para crear una obra de arte, debes proporcionar un token de autenticación (Bearer Token) en el encabezado de la solicitud.

- Método: POST
- URL: localhost:3000/artworks
- Encabezado de la solicitud:
  ```
  Authorization: Bearer [TU_TOKEN]
  ```
- Cuerpo de la solicitud (JSON):
  ```
  {
    "title": "test",
    "description": "test",
    "price": 1000,
    "url_image": "test"
  }
  ```

¡Listo! Con estos pasos, deberías poder ejecutar el proyecto y probar las funcionalidades básicas del Marketplace de Obras Digitales. Si tienes alguna pregunta o problema, no dudes en contactar al equipo de desarrollo.