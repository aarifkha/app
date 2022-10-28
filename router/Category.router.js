import Express from "express";
import { catego, getdata } from "../controller/category.controler.js";


const  categorys = Express.Router();
categorys.route("/category/creat").post(catego)
categorys.route("/category/get").get(getdata)
export default categorys;