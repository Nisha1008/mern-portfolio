const express = require("express");
const dotenv = require("dotenv");
const portfolioroute = require("./routes/portfolioroute");
const path = require('path');
const app = express();
dotenv.config();

const cors = require("cors");
const corsOptions = {
    origin: "*",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};

app.use(cors()); // Use this after the variable declaration

app.use(express.json()); // tell the server to accept the json data from frontend

//static file access
app.use(express.static(path.join(__dirname, './client/build')))
//Signup and login
app.use("/email", portfolioroute);

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.get("/", (req, res) => {
    res.send("Hello World!");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
});