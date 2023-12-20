const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const { DB_HOST } = process.env;
const app = require("./app");
// const { error } = require("./schemas/contact");

mongoose
  .connect(DB_HOST)
  .then(() => console.log("Database conect"))
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

app.listen(3000, () => {
  console.log("Server running. Use our API on port: 3000");
});
