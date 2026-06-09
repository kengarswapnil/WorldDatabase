const express = require("express");
require("dotenv").config();

const app = express();

const Port = 4000 | process.env.PORT;

app.listen(Port, () => {
  console.log(`server runnning at http://localhost:${Port}`);
});
