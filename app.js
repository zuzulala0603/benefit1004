const express = require("express");
const favicon = require("serve-favicon");
const path = require("path");
app = express();
//
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
app.use("/static", express.static(__dirname + "/public"));
app.use(favicon(path.join(__dirname, "public", "img", "favicon.ico")));

//
const itemRouter = require("./routes/item");
app.use("/", itemRouter);

//
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/template", (req, res) => {
  res.render("template");
});
app.get("/plus", (req, res) => {
  res.render("plus");
});
app.get("/robots.txt", (req, res) => {
  res.type("text/plain");
  res.send("User-agent: *\nAllow: /");
});
//
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("server on!");
});
