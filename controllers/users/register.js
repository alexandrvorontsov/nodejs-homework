const { Conflict } = require("http-errors");
const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
// const { nanoid } = require("nanoid");
const { v4 } = require("uuid");
const { User } = require("../../models");
const { sendEmail } = require("../../helpers");
const { BASE_URL } = process.env;

const register = async (req, res) => {
  const { name, email, password, subscription } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`User with ${email} already exist`);
  }

  const verificationToken = v4();
  const avatarURL = gravatar.url(email);
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

  await User.create({
    name,
    email,
    password: hashPassword,
    avatarURL,
    verificationToken,
  });

  const verifyEmail = {
    to: email,
    subject: "Confirm email",
    html: `<a target= "_blank" href='${BASE_URL}/users/verify/${verificationToken}'>Confirm email</a>`,
  };

  await sendEmail(verifyEmail);

  res.status(201).json({
    message: "New user has been created!",
    user: {
      email,
      subscription,
    },
  });
};

module.exports = register;
