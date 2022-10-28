import Express from "express";
import { cre } from "../controller/product.controler.js";
import { imageUpload } from "../services/image.service.js";
const productRouter = Express.Router()
productRouter.route("/product/creat").post(imageUpload.array('image',2),cre)

export default productRouter;