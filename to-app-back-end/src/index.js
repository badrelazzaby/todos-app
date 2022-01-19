const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");

const taskRoutes = require("./routes/task.routes.js");

const app = express();
const server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/task", (error) => {
  if (error) {
    return console.log("database error", error);
  } else {
    console.log("Connected to database");
  }
});
app.use(cors());

//routes configuration
((...routes) => {
  routes.forEach((route) => {
    return app.use("/api/v1/", [route]);
  });
})(taskRoutes);

server.listen(5000, (error) => {
  if (error) {
    return console.log("Server listening Error");
  } else {
    console.log("Server listening in port: 5000");
  }
});
