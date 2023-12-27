const express = require("express");
const { auth, validation, ctrlWrapper } = require("../../middlewares");
const { auth: ctrl } = require("../../controllers");
const { joiRegisterSchema, joiLoginSchema } = require("../../models/users");

const router = express.Router();

// console.log(joiLoginSchema);

router.post(
  "/register",
  validation(joiRegisterSchema),
  ctrlWrapper(ctrl.register)
);
// router.post("/signup")
// router.post("/signin")
// router.get("/signout")
router.post("/login", validation(joiLoginSchema), ctrlWrapper(ctrl.login));
router.get("/logout", auth, ctrlWrapper(ctrl.logout));
module.exports = router;
