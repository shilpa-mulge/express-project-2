const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminROuter = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorController = require("./controller/404");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminROuter);
app.use(shopRoutes);

//app.use(errorController.errorController);

app.listen(3000);
