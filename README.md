
# Clientes Microservice

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>
[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->


Este es un microservicio desarrollado en NestJS que gestiona información básica de clientes como el ID, nombre y apellido. El microservicio no utiliza una base de datos, sino que maneja los datos en memoria a través de colecciones.

## Descripción

Este microservicio forma parte de un curso de microservicios y está diseñado para enseñar a los estudiantes los conceptos fundamentales de la arquitectura de microservicios, manejo de rutas y controladores en NestJS. 

### Características:
- Listar clientes
- Buscar cliente por ID
- Crear un nuevo cliente
- Actualizar un cliente
- Eliminar un cliente

## Instalación

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/cquilumbacmc/clientes-microservice.git
   cd clientes-microservice
   ```

2. **Instalar dependencias**:
   Asegúrate de tener instalado [Node.js](https://nodejs.org/en/) en tu máquina. Luego, ejecuta el siguiente comando para instalar las dependencias del proyecto:
   ```bash
   npm install
   ```

## Despliegue

1. **Iniciar el microservicio**:
   Ejecuta el siguiente comando para iniciar el servidor NestJS en modo de desarrollo:
   ```bash
   npm run start:dev
   ```

   El microservicio estará disponible en `http://localhost:3000`.

## Probar el microservicio usando Postman

Puedes probar el microservicio utilizando [Postman](https://www.postman.com/) o cualquier otra herramienta para realizar peticiones HTTP.

### Endpoints disponibles:

1. **Listar todos los clientes**  
   `GET /clientes`  
   URL: `http://localhost:3000/clientes`

   **Ejemplo de respuesta**:
   ```json
   [
     {
       "id": 1,
       "nombre": "Juan",
       "apellido": "Perez"
     },
     {
       "id": 2,
       "nombre": "Maria",
       "apellido": "Gomez"
     }
   ]
   ```

2. **Buscar cliente por ID**  
   `GET /clientes/:id`  
   URL: `http://localhost:3000/clientes/1`

   **Ejemplo de respuesta**:
   ```json
   {
     "id": 1,
     "nombre": "Juan",
     "apellido": "Perez"
   }
   ```

3. **Crear un nuevo cliente**  
   `POST /clientes`  
   URL: `http://localhost:3000/clientes`

   **Body (JSON)**:
   ```json
   {
     "id": 3,
     "nombre": "Ana",
     "apellido": "Martinez"
   }
   ```

   **Ejemplo de respuesta**:
   ```json
   {
     "id": 3,
     "nombre": "Ana",
     "apellido": "Martinez"
   }
   ```

4. **Actualizar un cliente**  
   `PUT /clientes/:id`  
   URL: `http://localhost:3000/clientes/1`

   **Body (JSON)**:
   ```json
   {
     "nombre": "Juan Carlos",
     "apellido": "Perez"
   }
   ```

   **Ejemplo de respuesta**:
   ```json
   {
     "id": 1,
     "nombre": "Juan Carlos",
     "apellido": "Perez"
   }
   ```

5. **Eliminar un cliente**  
   `DELETE /clientes/:id`  
   URL: `http://localhost:3000/clientes/1`

   **Ejemplo de respuesta**:
   ```json
   {
     "message": "Cliente eliminado correctamente"
   }
   ```

## Tecnologías usadas

- [NestJS](https://nestjs.com/)
- Node.js
