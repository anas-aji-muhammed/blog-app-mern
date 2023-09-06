const express = require('express')
const { registerController, logInController, userProfileController, logoutController} = require('../controllers/authController')


const router = express.Router();

router.post("/signup", registerController);
router.post("/login", logInController);
router.get("/userProfile", userProfileController);
router.post("/logout", logoutController);


module.exports = router;
