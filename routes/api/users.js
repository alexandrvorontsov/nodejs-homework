const express = require("express");
const { auth, validation, ctrlWrapper } = require("../../middlewares");
const { users: ctrl } = require("../../controllers");
const { joiRegisterSchema, joiLoginSchema } = require("../../models/users");

const router = express.Router();

router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));

router.post(
  "/register",
  validation(joiRegisterSchema),
  ctrlWrapper(ctrl.register)
);

router.post("/login", validation(joiLoginSchema), ctrlWrapper(ctrl.login));

router.get("/logout", auth, ctrlWrapper(ctrl.logout));

router.patch("/:id", auth, ctrl.updateSubscription);

module.exports = router;
