import express from "express";

import connectiontb from "./config/monodbserver.js";

import categorys from "./router/Category.router.js";
import productRouter from "./router/product.router.js";
import sbcategory from "./router/sbcategory.router.js";
import router from "./router/user.route.js";
// import { mail } from "./mail.js";
import { config } from "dotenv";

const app = express();
app.use(express.json())
connectiontb()
config();
// mail();
app.use(router)
app.use(categorys)
app.use(productRouter)
app.use(sbcategory)

app.listen(process.env.PORT || 2011,(req,res)=>{
    console.log("server start");
});