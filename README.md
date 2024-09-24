
# Clientes Microservice

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
   \`\`\`bash
   git clone https://github.com/cquilumbacmc/clientes-microservice.git
   cd clientes-microservice
   \`\`\`

2. **Instalar dependencias**:
   Asegúrate de tener instalado [Node.js](https://nodejs.org/en/) en tu máquina. Luego, ejecuta el siguiente comando para instalar las dependencias del proyecto:
   \`\`\`bash
   npm install
   \`\`\`

## Despliegue

1. **Iniciar el microservicio**:
   Ejecuta el siguiente comando para iniciar el servidor NestJS en modo de desarrollo:
   \`\`\`bash
   npm run start:dev
   \`\`\`

   El microservicio estará disponible en \`http://localhost:3000\`.

## Probar el microservicio usando Postman

Puedes probar el microservicio utilizando [Postman](https://www.postman.com/) o cualquier otra herramienta para realizar peticiones HTTP.

### Endpoints disponibles:

1. **Listar todos los clientes**  
   \`GET /clientes\`  
   URL: \`http://localhost:3000/clientes\`

   **Ejemplo de respuesta**:
   \`\`\`json
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
   \`\`\`

2. **Buscar cliente por ID**  
   \`GET /clientes/:id\`  
   URL: \`http://localhost:3000/clientes/1\`

   **Ejemplo de respuesta**:
   \`\`\`json
   {
     "id": 1,
     "nombre": "Juan",
     "apellido": "Perez"
   }
   \`\`\`

3. **Crear un nuevo cliente**  
   \`POST /clientes\`  
   URL: \`http://localhost:3000/clientes\`

   **Body (JSON)**:
   \`\`\`json
   {
     "id": 3,
     "nombre": "Ana",
     "apellido": "Martinez"
   }
   \`\`\`

   **Ejemplo de respuesta**:
   \`\`\`json
   {
     "id": 3,
     "nombre": "Ana",
     "apellido": "Martinez"
   }
   \`\`\`

4. **Actualizar un cliente**  
   \`PUT /clientes/:id\`  
   URL: \`http://localhost:3000/clientes/1\`

   **Body (JSON)**:
   \`\`\`json
   {
     "nombre": "Juan Carlos",
     "apellido": "Perez"
   }
   \`\`\`

   **Ejemplo de respuesta**:
   \`\`\`json
   {
     "id": 1,
     "nombre": "Juan Carlos",
     "apellido": "Perez"
   }
   \`\`\`

5. **Eliminar un cliente**  
   \`DELETE /clientes/:id\`  
   URL: \`http://localhost:3000/clientes/1\`

   **Ejemplo de respuesta**:
   \`\`\`json
   {
     "message": "Cliente eliminado correctamente"
   }
   \`\`\`

## Tecnologías usadas

- [NestJS](https://nestjs.com/)
- Node.js
