const express = require("express");
const { auth } = require("../middlewares/auth.js");
const { register,
        login,
        checkAuth } = require("../controllers/auth");

const router = express.Router();
router.post("/register", register);
router.post("/login", login)
router.get("/check-auth", auth, checkAuth);

module.exports = router 