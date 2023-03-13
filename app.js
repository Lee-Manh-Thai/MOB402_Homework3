const express = require("express");
const bodyParser = require("body-parser");
const cal = require("./calculator.js");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.get("/say_hi", function (req, res) {
  res.send('Hello World!')
});
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/result", (req, res) => {
  console.log(req.body);
  const number_a = Number(req.body.number_a);
  const number_b = Number(req.body.number_b);
  const operator = req.body.operator;

  switch (operator) {
    case "add":
      var result = cal.addition(number_a, number_b);
      res.send(`${number_a} + ${number_b} = ${result}`);
      break;
    case "sub":
      var result = cal.subtraction(number_a, number_b);
      res.send(`${number_a} - ${number_b} = ${result}`);
      break;
    case "multi":
      var result = cal.multiplication(number_a, number_b);
      res.send(`${number_a} x ${number_b} = ${result}`);
      break;
    case "divide":
      var result = cal.division(number_a, number_b);
      res.send(`${number_a} : ${number_b} = ${result}`);
      break;
  }
});

app.listen(8080,() => {
  console.log('The web server on port 8080')
});
