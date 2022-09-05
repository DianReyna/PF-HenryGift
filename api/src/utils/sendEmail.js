const nodemailer = require("nodemailer");
require("dotenv").config();
const { AUTH_USER, AUTH_PASS } = process.env;

// const URL = "https://henry-gift.vercel.app";
const URL = "http://127.0.0.1:5173";

let mailTransport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: AUTH_USER,
    pass: AUTH_PASS,
  },
  tls: { rejectUnauthorized: false },
});

const sendCode = (recipient, confirmationCode) => {
  console.log("Check");
  mailTransport
    .sendMail({
      from: AUTH_USER,
      to: recipient,
      subject: "You received a Henry Gift",
      html: `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
              .button{
                  width: 30%;
                      background-color: #BF360C;
                      border: 2px solid #BF360C;
                      color: #ffffff; 
                      padding: 8px 16px;
                      text-align: center;
                      text-decoration: none;
                      font-weight: bold;
                      display: inline-block;
                      font-size: 16px;
                      margin: 4px 2px;
                      transition-duration: 0.4s;
                      cursor: pointer;
              }
              .button:hover{
                  background-color: #ffb300;
                  border: 2px solid #ffb300;
                  color: #ffffff;
              }
          </style>
      </head>
      <body>
          <div style="width: 100%; background-color: #e3e3e3;">
              <div style="padding: 20px 10px 20px 10px;">
                  <div style="background-color: #000000; padding: 10px 0px 10px 0px; width: 100%; text-align: center;">
                  </div>
                  <!-- Main Content-->
                  <div style="background-color: #ffffff; padding: 20px 0px 5px 0px; width: 100%; text-align: center;">
                  <h1>Redeem Code</h1>
                  <h2>Hello</h2>
                  <p>You can redeem your gift with the following code <strong>${confirmationCode}</strong> at</p>
                      <!-- Button -->
                      <a class="button" href=${URL}/> Click here</a>
                  </div>
                  <!-- Main Content -->
                  <!-- Footer -->
                  <div style=" color: #ffffff; padding: 5px 0px 0px 0px; width: 100%; text-align: center;">
                      <p style="background-color: black; padding: 10px 0px 10px 0px; font-size: 12px ;">
                           HenryGift 2022 ©Copyright.
                      </p>
                  </div>
                  <!-- Footer -->
              </div>
          </div>
      </body>
      </html>`,
    })
    .catch((err) => console.log(err));
};

const confirmPay = (recipient) => {
  console.log("Check");
  mailTransport
    .sendMail({
      from: AUTH_USER,
      to: recipient,
      subject: "Payment Confirmation",
      html: `<h1>Successful Payment</h1>
        <h2>Thank you for choosing us</h2>
        <p>The recipients of your gift will recieve an email with the redeem code.</p>
        </div>`,
    })
    .catch((err) => console.log(err));
};

const changePassword = (recipient) => {
  console.log("change pasword");
  mailTransport
    .sendMail({
      from: AUTH_USER,
      to: recipient,
      subject: "You requested to recover the password",
      attachDataUrls: true,
      html: `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
              .button{
                  width: 30%;
                      background-color: #BF360C;
                      border: 2px solid #BF360C;
                      color:#ffffff; 
                      padding: 8px 16px;
                      text-align: center;
                      text-decoration: none;
                      font-weight: bold;
                      display: inline-block;
                      font-size: 16px;
                      margin: 4px 2px;
                      transition-duration: 0.4s;
                      cursor: pointer;
              }
              .button:hover{
                  background-color: #ffb300;
                  border: 2px solid #ffb300;
                  color: #ffffff;
              }
          </style>
      </head>
      <body>
          <div style="width: 100%; background-color: #e3e3e3;">
              <div style="padding: 20px 10px 20px 10px;">
                  <div style="background-color: #000000; padding: 10px 0px 10px 0px; width: 100%; text-align: center;">
                  </div>
                  <!-- Main Content-->
                  <div style="background-color: #ffffff; padding: 20px 0px 5px 0px; width: 100%; text-align: center;">
                  <h2>You requested to recover the password</h2>        
                  <img src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/password-reset-icon.png" alt="image-key" style="width: 60px; height: 60px;">   
                  <h3>Hello!!</h3> 
                  <p>Do you forget your password?.</p>
                  <p>Go the link below and create a new one.</p>
                      <!-- Button -->
                      <a class="button" href=${URL}/login/reset-password/${recipient.split("@")[0]}> Reset password</a>
                  </div>
                  <!-- Main Content -->
                  <!-- Footer -->
                  <div style=" color: #ffffff; padding: 5px 0px 0px 0px; width: 100%; text-align: center;">
                      <p style="background-color: black; padding: 10px 0px 10px 0px; font-size: 12px ;">
                           HenryGift 2022 ©Copyright.
                      </p>
                  </div>
                  <!-- Footer -->
              </div>
          </div>
      </body>
      </html>`,
    })
    .catch((err) => console.log(err));
};

const sendQr = (recipient, img) => {
  console.log("Check");
  mailTransport
    .sendMail({
      from: AUTH_USER,
      to: recipient,
      subject: "Service QR Code",
      attachDataUrls: true,
      html: `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body>
          <div style="width: 100%; background-color: #e3e3e3;">
              <div style="padding: 20px 10px 20px 10px;">
                  <div style="background-color: #000000; padding: 10px 0px 10px 0px; width: 100%; text-align: center;">
                  </div>
                  <!-- Main Content-->
                  <div style="background-color: #ffffff; padding: 20px 0px 5px 0px; width: 100%; text-align: center;">
                  <h1>You chose a Service!</h1>        
                  <p>Show the service provider the QR code at the moment of arraging the reservation date</p>
                  <img src="${img}" />
                  </div>
                  <!-- Main Content -->
                  <!-- Footer -->
                  <div style=" color: #ffffff; padding: 5px 0px 0px 0px; width: 100%; text-align: center;">
                      <p style="background-color: black; padding: 10px 0px 10px 0px; font-size: 12px ;">
                           HenryGift 2022 ©Copyright.
                      </p>
                  </div>
                  <!-- Footer -->
              </div>
          </div>
      </body>
      </html>`,
    })
    .catch((err) => console.log(err));
};

const confirmEmail = (recipient, jwt_code) => {
    console.log("Check");
    mailTransport
      .sendMail({
        from: AUTH_USER,
        to: recipient,
        subject: "Confirm email",
        attachDataUrls: true,
        html: `<h1>Please verify your email!</h1>
          <p>Click on the link to confirm your email</p>
          <a href="${URL}/confirmation?token=${jwt_code}">${URL}/confirmation?token=${jwt_code}<a/>`,
      })
      .catch((err) => console.log(err));
  };

module.exports = {
  sendCode,
  confirmPay,
  changePassword,
  sendQr,
  confirmEmail
};
