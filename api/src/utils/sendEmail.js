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

module.exports={
  sendCode
}