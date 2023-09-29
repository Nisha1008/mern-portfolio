const express = require("express");
const { sendEmail } = require("../controllers/portfoliocontrollers");

//router object
const router = express.Router()

//routes
router.post('/sendEmail', sendEmail)

//exports
module.exports = router;