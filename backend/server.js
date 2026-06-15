const express = require("express");
const db = require('./config/db')
const cors = require("cors");


require("dotenv").config();


const app = express();
app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

const databaseRoutes = require('./Routes/databaseRoutes')
app.use('/',databaseRoutes);


const Port = 4000 | process.env.PORT;

app.listen(Port, () => {
  console.log(`server runnning at http://localhost:${Port}`);
});
