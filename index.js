const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
require('./DBconnection/DBconnection')


app.use(cors());
app.use(express.json());
app.use(bodyParser.json())

const UserRoute = require("./Routes/userRoutes");
const MediaRoute = require("./Routes/mediaRoutes");

app.use("/user", UserRoute); 
app.use("/media", MediaRoute); 

app.get("/", (req, res) => {
    console.log('Sequalize server is connected')
    });
  
  app.listen(port, (req, res) => {
  console.log("Sequalize Server Port Is", port);
  });
