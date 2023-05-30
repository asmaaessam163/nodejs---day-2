const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const path = require("path");

app.set("view engine", "pug");
app.set("views", "views");

app.use((req, res, next) => {
  console.log("Validation authentication");
  next();
});

app.use(bodyParser.urlencoded());

app.use(express.static("public"));

app.use((_req, _res, next) => {
  console.log("Validation input data");
  next();
});

app.use("/admin", adminRoutes.routes);
app.use("/shop", shopRoutes.routes);

// app.get("/add-product", adminRoutes.addNewProduct);

// app.post("/add-product", adminRoutes.submitNewProduct);

app.use("/", (req, res, next) => {
  res.send("Hello from our first express app");
  // res.redirect("https://google.com");
});

app.listen(3000, () => {
  console.log("Server is runing on port 3000");
});
