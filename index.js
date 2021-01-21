const express = require("express");

const bodyParser = require('body-parser')

const app = express();

const routes = require('./routes')

app.use(bodyParser.json())

app.use('/', routes)


app.listen(4000, () => console.log("this app running on port 4000"));
