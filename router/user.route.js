import Express from "express";
import {  getup, loginup, signup, updat } from "../controller/user.controler.js";
import { athantion } from "../middlver/authentication.js";
const router = Express.Router()
router.route("/sign").post(signup)
router.route("/login").post(loginup)
router.route("/gets").get(athantion,getup)
router.route("/update").put(updat)



export default router;