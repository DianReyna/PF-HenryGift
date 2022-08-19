const nodemailer = require("nodemailer")
require("dotenv").config();
const { AUTH_USER,AUTH_PASS} = process.env;

let mailTransport = nodemailer.createTransport({
  service:"Gmail",
  auth:{
    user:AUTH_USER,
    pass:AUTH_PASS
  },
  tls: {rejectUnauthorized: false}
})

const sendCode = (recipient, confirmationCode) => {
  console.log("Check");
  mailTransport.sendMail({
    from: AUTH_USER,
    to: recipient,
    subject: "You received a Henry Gift",
    html: `<h1>Redeem Code</h1>
        <h2>Hello</h2>
        <p>You can redeem your gift with the following code <strong>${confirmationCode}</strong> at</p>
        <a href=http://127.0.0.1:5173/> Click here</a>
        </div>`,
  }).catch(err => console.log(err));
};

const confirmPay =  (recipient) => {
  console.log("Check");
  mailTransport.sendMail({
    from: AUTH_USER,
    to: recipient,
    subject: "Payment Confirmation",
    html: `<h1>Successful Payment</h1>
        <h2>Thank you for choosing us</h2>
        <p>The recipients of your gift will recieve an email with the redeem code.</p>
        </div>`,
  }).catch(err => console.log(err));
};


const  changePassword=  (recipient) => {
  console.log("change pasword");
  mailTransport.sendMail({
    from: AUTH_USER,
    to: recipient,
    subject: "Reset password",
    html: `<h1>Reset password</h1>
        <h2>Hello !!</h2>
        <p>You requested to recover the password.</p>
        <p>Click on the link below and create a new one.</p>
        <a href=http://127.0.0.1:5173/login/reset-password/${recipient}> Reset password</a>
        </div>`,
  }).catch(err => console.log(err));
};

const sendQr = (recipient,img) => {
  console.log("Check");
  mailTransport.sendMail({
    from: AUTH_USER,
    to: recipient,
    subject: "Payment Confirmation",
    attachDataUrls: true,
    html: `<h1>Successful Payment</h1>
        <h2>Thank you for choosing us</h2>
        <img src="${img}" />`
  }).catch(err => console.log(err));
};

module.exports={
  sendCode,
  confirmPay,
  changePassword,
  sendQr
}