# Proyecto Digital Booking

Este proyecto fue creado con [Create React App](https://github.com/facebook/create-react-app).
El backend fue desarrolado de Java.


## Creación del proyecto en la carrera Certified Tech Developer

En el directorio del proyecto, puede ejecutar:

### `npm start`

Ejecute la aplicación en el modo de desarrollo.\
Abra [http://localhost:3000](http://localhost:3000) para verlo en el navegador.


### Equipo de trabajo

- Rocio Bottinelli
- Lucas Vuoso
- Federico Paz
- Guillermo Martinelli
- Agustin Vanetta
- Oscar Peñuela


## Documentación

Para revisar la documentación de React, revisar la documentación [React documentation](https://reactjs.org/).

Para revisar la documentación de Spring Boot, revisar la documentación [Spring Boot documentation](https://spring.io/guides).

Para revisar la documentación de Java, revisar la API [JAVA API Specification](https://docs.oracle.com/en/java/javase/11/docs/api/).



## Sprint I

En este Sprint se desarrollaron las siguientes Épicas

- [x] Usabilidad
- [x] Gestión de productos
- [x] Listado y búsqueda de productos
- [x] Gestión de usuarios
- [x] Testeo
- [x] Infraestructura


### Issues - Front End

- [x] Implementar template general responsive
- [x] Implementar template bloque buscador
- [x] Implementar template del bloque listado
- [x] Implementar template del bloque categorías
- [x] Implementar template de login y registro
- [x] Evento de login de usuario
- [x] Evento de headder



#### Implementar template general responsive

- Header
- Body
- Footer

#### Implementar template bloque buscador, listado y categorías

- Bloque con título y parágrafo
- Formulario
- Card
- Bloque con 4 categorías

#### Implementar template de login y registro

- Bloque general
- Formulario de inicio de sesión
- Texto que redireccione al registro
- Formulario de registro

#### Evento de login de usuario

- Validaciones en inputs
- Botón crear cuenta
- Credenciales inválidas
- Credenciales válidas

#### Evento de Header

- Click botón iniciar sesión
- Click bot-on crear cuenta
- Click botón cerrar bloque de registro / login




### Issues - Back End y Base de Datos

- [x] Crear tabla de categorías
- [x] CRUD categorías
- [x] Crear API
- [x] API: Agregar endpoint de categorías



#### Crear tabla de categorías

- Crear tabla "categorías" en la base de datos.
- La tabla deberá contener los atributos ( Id, Título, Descripción y URL imagen).

#### CRUD categorías

- Conectarse a la base para operaciones CRUD
- Mapear los atributos de la tabla "categorías" con una clase de nuestro modelo

#### Crear API

- Crear el proyecto en Sprind Data JPA para implenetar la API con los endpoints del sistema

#### API: Agregar endpoint de categorías

- Desarrollar el endpoint para ser consumida por el frontend
- El Controller deberá tener los métodos necesarios para (agregar, listar todas, editar y eliminar las categorías)



### Issues - Testing

- [x] Planificación y ejecución de los tests
- [x] Testear la API


#### Planificación y ejecución de los test

- Planear casos de test basados en las historias de usuarios
- Realizar prueba exploratoria sobre lo desarrollado

#### Testear la API

- Validar el funcionamiento de la API REST utilizando Postman y creando los scripts de prueba



### Issues - Infraestrutura

-[x] Diseño de la red

#### Diseño de la red

- Presentar un diseño de la infraestructura necesaria para hacer funcionar el proyecto en AWS