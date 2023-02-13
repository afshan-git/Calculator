import morgan from 'morgan';

const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan())

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const num1 = Number(req.body.n1);
  const num2 = Number(req.body.n2);
  const result = num1 + num2;
  console.log(num1,num2,result)
  res.send(`The sum of ${num1} and ${num2} is :   ${result}`);
});

app.listen(3000, function () {
  console.log("Server running at port 3000: ");
});
