const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const config = require("./config");
const jwt = require("jsonwebtoken");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.set("jwt-secret", config.secret);

const user = {
  email: config.email,
  password: config.password,
  name: "홍길동",
};

app.get("/", function (req, res) {
  res.send("Hello home page");
});

app.get("/data", (req, res) => {
  let url = path.join(__dirname, "/public/data/piechartdata.json");

  fs.readFile(url, "utf8", (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("server err");
    }
    res.send(data);
  });
});

app.post("/signin", (req, res) => {
  const { email, password } = req.body;
  const secret = req.app.get("jwt-secret");

  try {
    if (email === user.email && password === user.password) {
      const JWT_KEY = jwt.sign({ email: email, name: user.name }, secret, {
        expiresIn: "7d",
      });
      res.status(200).json({
        status: true,
        name: user.name,
        JWT_KEY: JWT_KEY,
      });
    } else {
      res.status(404).json({ message: "login fail; Wrong info" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
});

app.listen(port, () => {
  console.log(`open server port: ${port} `);
});
