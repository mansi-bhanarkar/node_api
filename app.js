const express = require('express');

const app = express();


const postsRoute = require("./routes/posts");
const userRoute = require("./routes/user");
const imageRoute = require("./routes/images");

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/posts",postsRoute);
app.use("/user",userRoute);
app.use("/image",imageRoute);

module.exports = app;
