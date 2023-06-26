import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import { routes as adminRoutes } from "./routes/admin";
import {routes as shopRoutes} from "./routes/shop";
import {routes as productRoutes} from "./routes/product";
import {routes as userRoutes} from "./routes/user";
import { type NextFunction, type Request, type Response } from "express";
import { initDB } from "./adaptor/db-connection";
dotenv.config();
const app = express();


app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.static("public"));

app.use((_req: Request, _res: Response, next: NextFunction) => {
  console.log("Validation input data");
  next();
});

initDB((err: unknown) => {
  if (err) {
    console.log("Error while Connection");
  } else {
    console.log("Database Connected Successfully");
  }
}).then(() => {
  app.listen(process.env.PORT ?? 3000, () => {
    console.log("Server is runing on port 3000");
  });
});

app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);
app.use("/product", productRoutes);
app.use("/user", userRoutes);

// app.get("/add-product", adminRoutes.addNewProduct);

// app.post("/add-product", adminRoutes.submitNewProduct);

app.use("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello from our first express app");
  // res.redirect("https://google.com");
});
