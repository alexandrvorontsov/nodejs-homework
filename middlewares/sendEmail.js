const nodemailer = require("nodemailer");
require("dotenv").config();
const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: { user: "axion.mymail@meta.ua", pass: META_PASSWORD },
};

const transport = nodemailer.createTransport(nodemailerConfig);
const sendEmail = async (data) => {
  const email = { ...data, from: "axion.mymail@meta.ua" };
  console.log(email);
  await transport.sendMail(email);
  return true;
};

module.exports = sendEmail;
