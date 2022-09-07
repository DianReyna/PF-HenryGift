<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' />
</p>

# Henry Gift

[Spanish](./Translation/READMEes.md)

## Introduction

This is a group proyect created for the Henry bootcamp by 7 members of the 09 team.
The idea is to design and code an E-comerce of boxes, in it you can buy, recieve, and/or gift a happiness package, exchanging said package for one of the options the catalogue includes.

## Proyect Objetives

- Create an app with Javascript
- Afirm and connect all the concepts learned on the bootcamp
- Learn and practice Git workflow and teamwork
- Use the SCRUM methodology

## Used technologies

### Front End:

HTML, CSS, Javascript, React, axios, Redux-Toolkit, Material-Ui, styled-components

### Back End:

NodeJs, Express, Pasport, Json web Token authentication, Cloudinary, Stripe, bcrypt, qrcode, Nodemailer, Sequelize.

### Database:

PostgresSQL

## **Starting Instructions**

**IMPORTANT:** Necessary version of node and NPM

**Node**: v16.14.0 or higher
**NPM**: 8.3.1 or higher

## BoilerPlate

The boilerPlate has two folders: `api` and `client`.

Inside the `api` you should create a file called:`.env` with the following format:

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

Replace `postgresuser` , `postgrespassword` y `databaseName` with your credentials, so that you can connect to de database.

For` youremail` y `passwordauthemail` you must follow the following steps at <a href="https://www.youtube.com/watch?v=J4CtP1MBtOE&ab_channel=TonyTeachesTech">video</a> to configure your gmail.

For `stripekey` and `jwtsecretkey` replace with your credentials.

For `cloudinaryname` , `cloudinaryapikey` and ` cloudinaryapisecret` you must create a cloudinary account and place your credentials. <a href="https://www.youtube.com/watch?v=lcKQv4QAXME&t=1s&ab_channel=prefectcode">Video to create account</a>

Remember the `.env` file is ignored by `.gitignore` since it contains sensible information.

### _Install the necesary package to run it_

- Open the project console

* Inside the folder `api`, run the command line, `npm install`
* Inside the folder `client`, run the command line. `npm install`

### _Run the proyect_

- Open the project console

* Inside the folder `api`, run the command line, `npm run dev`
* Inside the folder `client`, run the command line, `npm run dev` (`alt + click` o `ctrl + click` on the link showing in the console to open the proyect preview)
