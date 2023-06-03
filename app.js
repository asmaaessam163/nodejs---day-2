const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const adminRoutes = require("./src/routes/admin");
const shopRoutes = require("./src/routes/shop");
const path = require("path");
const productRoutes = require("./src/routes/product");

const {initDB} = require("./src/adaptor/db-connection");

app.set("view engine", "pug");
app.set("views", "views");

app.use((req, res, next) => {
  console.log("Validation authentication");
  next();
});

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.static("public"));

app.use((_req, _res, next) => {
  console.log("Validation input data");
  next();
});

initDB((err) => {
  if (err) {
    console.log("Error while Connection");
  } else {
    console.log("Database Connected Successfully");
  }
}).then(() => {
  app.listen(3000, () => {
    console.log("Server is runing on port 3000");
  });
});

app.use("/admin", adminRoutes.routes);
app.use("/shop", shopRoutes.routes);
app.use("/product", productRoutes);

// app.get("/add-product", adminRoutes.addNewProduct);

// app.post("/add-product", adminRoutes.submitNewProduct);

app.use("/", (req, res, next) => {
  res.send("Hello from our first express app");
  // res.redirect("https://google.com");
});
