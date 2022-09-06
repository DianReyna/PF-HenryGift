<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' />
</p>

# Henry Gift

## Introduction

Este es un proyecto grupal creado para Henry bootcamp por 7 integrandes del equipo 09.
La idea es diseñar y programar una E-commerce de boxes, en ella se pueden comprar, recibir y/o regalar paquetes de felicidad, canjeando dicho paquete por una de las opciones que incluya el catálogo.

## Proyect Objetives

- Crear una aplicacion con Javascript
- Afirmar y conectar todos los conceptos aprendidos en la carrera
- Aprender y practicar Git workflow / trabajo en equipo
- Usar la metodologia scrum

## Tecnologias utilizadas

### Front End:

HTML, CSS, Javascript, React, axios, Redux-Toolkit, Material-Ui, styled-components

### Back End:

NodeJs, Express, Pasport, Json web Token authentication, Cloudinary, Stripe, bcrypt, qrcode, Nodemailer, Sequelize.

###Database:
PostgresSQL

## **Starting Instructions**

**IMPORTANT:** Necesary version of node and NPM

**Node**: v16.14.0 o mayor
**NPM**: 8.3.1 o mayor

## BoilerPlate

The boilerPlate has two folders: `api` and `client`.

Dentro de `api` deberias crear un archivo llamado:`.env` con el siguiente fromato:

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

deberias remplasar `postgresuser` , `postgrespassword` y `databaseName` con tus credenciales, para que puedas conectar con la base de datos.

Para` youremail` y `passwordauthemail` debes seguir los pasos del siguiente <a href="https://www.youtube.com/watch?v=J4CtP1MBtOE&ab_channel=TonyTeachesTech">video</a> para configurar tu correo gmail.

Para `stripekey` ...

Para `jwtsecretkey` ...

Para `cloudinaryname` , `cloudinaryapikey` y ` cloudinaryapisecret` debes crearte una cuenta en cloudinary y colocar tus credenciales. <a href="https://www.youtube.com/watch?v=lcKQv4QAXME&t=1s&ab_channel=prefectcode">video para crear cuenta</a>

recuerda que el archivo .env es ignorado por .gitignore ya que estas contains son informacion sensible (the credeentials).

### _Install necesary package to run it_

- Abre la consola :

* dentro de la carpeta `api`, run the command line, `npm install`
* dentro de la carpeta `client`, run the command line. `npm install`

### _Run the proyect_

- Abre la consola:

* dentro de la carpeta `api`, run the command line, `npm run dev`
* dentro de la carpeta `client`, run the command line, `npm run dev` (`alt + click` o `ctrl + click` en el enlace que aparece en la consola para que te lleve a la preview del proyecto)
