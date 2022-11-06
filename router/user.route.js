import Express from "express";
import {  desss, getup, loginup, resendotp, signup, updat } from "../controller/user.controler.js";
import { athantion } from "../middlver/authentication.js";
const router = Express.Router()
router.route("/sign").post(signup)
router.route("/login").post(loginup)
router.route("/gets").get(athantion,getup)
router.route("/update").put(updat)
router.route("/shbaj").delete(desss)

router.route("/otp").post(resendotp)



export default router;