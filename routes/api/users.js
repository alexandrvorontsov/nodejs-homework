const express = require("express");
const { auth, validation, ctrlWrapper, upload } = require("../../middlewares");
const { users: ctrl } = require("../../controllers");
const { joiRegisterSchema, joiLoginSchema } = require("../../models");
// const { verificationToken } = require("../../controllers/users");

const router = express.Router();

router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));

router.post(
  "/register",
  validation(joiRegisterSchema),
  ctrlWrapper(ctrl.register)
);
router.get("/users/verify/:verificationToken", ctrlWrapper(ctrl.verifyEmail));
router.post("/users/verify");

router.post("/login", validation(joiLoginSchema), ctrlWrapper(ctrl.login));

router.get("/logout", auth, ctrlWrapper(ctrl.logout));

// router.patch("/:id", auth, ctrl.updateSubscription);

router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  ctrlWrapper(ctrl.updateAvatar)
);

module.exports = router;
