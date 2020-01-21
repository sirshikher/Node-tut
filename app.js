const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fishRoutes = require("./routes/fishes");
const LoginRoutes = require("./routes/login");
const BooksRoutes = require("./routes/books");
const crocodileRoutes = require("./routes/crocodile");
const morgan = require("morgan");
const cors = require("cors");
const Logger = require('./utils/logger')

const accessTokenSecret = 'youraccesstokensecret';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(bodyParser.json());
// app.use(morgan("tiny"));
//app.use("/fishes", fishesRoutes);
app.use(morgan("tiny"));
app.use("/fishes", fishRoutes);
app.use("/crocodile", crocodileRoutes);
app.use("/login", LoginRoutes);
app.use("/books", BooksRoutes);

app.use(function(req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

if (app.get("env") === "development") {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send({
      message: err.message,
      error: err
    });
  });
}

app.listen(3000, function() {
  console.log("Server starting on port 3000!");
  Logger.info("SSSServer starting on port 3000!");
});
