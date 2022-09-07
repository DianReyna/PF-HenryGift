<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' />
</p>

# Henry Gift

[English](../README.md)

## Introducción

Este es un proyecto grupal creado para Henry bootcamp por 7 integrandes del equipo 09.
La idea es diseñar y programar una E-commerce de boxes, en ella se pueden comprar, recibir y/o regalar paquetes de felicidad, canjeando dicho paquete por una de las opciones que incluya el catálogo.

## Objetivos del Proyecto

- Crear una aplicacion con Javascript
- Afirmar y conectar todos los conceptos aprendidos en la carrera
- Aprender y practicar Git workflow / trabajo en equipo
- Usar la metodologia scrum

## Tecnologias utilizadas

### Front End:

HTML, CSS, Javascript, React, axios, Redux-Toolkit, Material-Ui, styled-components

### Back End:

NodeJs, Express, Pasport, Json web Token authentication, Cloudinary, Stripe, bcrypt, qrcode, Nodemailer, Sequelize.

### Database:

PostgresSQL

## **Instrucciones de Inicio**

**IMPORTANTE:** Necesita las versiones de node y NPM

**Node**: v16.14.0 o mayor
**NPM**: 8.3.1 o mayor

## BoilerPlate

Este proyecto tiene 2 carpetas: `api` y `client`.

Dentro de `api` debes crear un archivo llamado:`.env` con el siguiente fromato:

```
DB_USER=postgresUser
DB_PASSWORD= postgresPassword
DB_HOST= localhost
DB_NAME= databaseName
AUTH_USER = youremail
AUTH_PASS = passwordauthemail
STRIPE_KEY= stripekey
JWT_SECRET_KEY = jwtsecretkey
CLOUDINARY_NAME = cloudinaryname
CLOUDINARY_API_KEY = cloudinaryapikey
CLOUDINARY_API_SECRET =  cloudinaryapisecret
```

Debes reemplazar `postgresuser` , `postgrespassword` y `databaseName` con tus credenciales, para que puedas conectar con la base de datos.

Para` youremail` y `passwordauthemail` debes seguir los pasos del siguiente <a href="https://www.youtube.com/watch?v=J4CtP1MBtOE&ab_channel=TonyTeachesTech">video</a> para configurar tu correo gmail.

Para `stripekey` y `jwtsecretkey` remplaza con tus credenciales.

Para `cloudinaryname` , `cloudinaryapikey` y ` cloudinaryapisecret` debes crearte una cuenta en cloudinary y colocar tus credenciales. <a href="https://www.youtube.com/watch?v=lcKQv4QAXME&t=1s&ab_channel=prefectcode">video para crear cuenta</a>

Recuerda que el archivo .env es ignorado por .gitignore ya que este contenido es información sensible (the credeentials).

### _Instala lo necesario del package para correrlo_

- Abre la consola :

* Dentro de la carpeta `api`, ejecuta la siguiente linea de comando, `npm install`
* Dentro de la carpeta `client`, ejecuta la siguiente linea de comando. `npm install`

### _Levanta el proyecto_

- Abre la consola:

* Dentro de la carpeta `api`, ejecuta la siguiente linea de comando, `npm run dev`
* dentro de la carpeta `client`, ejecuta la siguiente linea de comando, `npm run dev` (`alt + click` o `ctrl + click` en el enlace que aparece en la consola para que te lleve a la preview del proyecto)
