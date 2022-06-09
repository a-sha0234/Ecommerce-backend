const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.urlencoded({ extended: true })); //allows for form data to work
app.use(express.json());
app.use(
  cors({
    //allow requests from any client
    origin: "*",
  })
);
const port = process.env.PORT || 3002;

mongoose
  .connect(process.env.DBURL, { useNewUrlParser: true })
  .then((result) => app.listen(port))
  .catch((err) => console.log(err));
