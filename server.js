const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");
// const Routes = require("./server/rounter.js");

const app = express();
// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use("/", express.static(path.join(__dirname, "./dist")));
// app.use("/reviews", Routes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
});
