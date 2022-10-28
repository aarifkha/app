import Express  from "express";
import { creats, getdatas } from "../controller/sbcategory.controler.js";
const sbcategory = Express.Router()
sbcategory.route("/sbcategory/creat").post(creats)
sbcategory.route("/sbcategory/get").get(getdatas)

export default sbcategory;
