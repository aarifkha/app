import express from "express";
import fs from "fs"
import bcrypt from "bcrypt"
import user from "../module/user.schma.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
    try {


        const cret = await user.findOne({ email: req.body.email })
        if (cret) {
            res.send({
                status: false,
                msg: "email already exit ",
                data: {}
            })
        } else {
            var passhash = await bcrypt.hash(req.body.password, 10)
            req.body.password = passhash
            var don = await user.create(req.body)
            if (don) {
                don.token = await jwt.sign({ time: Date(), userid: user._id }, "king")

                res.send({
                    status: true,
                    msg: " creat succesfully",
                    data: don
                })
            }
        }

    } catch (error) {
        res.send({
            status: false,
            msg: "something went wrong",
            data: error
        })
    }

}


export const loginup = async (req, res) => {
    try {
        const mama = await user.findOne({ email: req.body.email })

        if (mama) {
            var passcommper = await bcrypt.compare(req.body.password, mama.password)
            if (passcommper) {
                mama.token = await jwt.sign({ time: Date(), userid: mama.id }, "king")
                res.send({
                    status: true,
                    msg: "signup sucessfully",
                    data: mama
                })
            } else {
                res.send({
                    status: false,
                    msg: "password is wrong",
                    data: {}
                })
            }
        }
    } catch (error) {
        res.send({
            status: false,
            msg: "email not found",
            data: {}
        })
    }
}


export const getup = async (req, res) => {


    try {

        const data = await user.find({ email: req.body.email })
        if (data) {
            res.send({
                status: true,
                msg: "User data fetch successfully.",
                data: data
            })
        } else {
            res.send({
                status: false,
                msg: "No data found",
                data: []
            })
        }
    } catch (error) {

    }
}

export const updat = async (req, res) => {

    try {


        var crea = await user.findByIdAndUpdate({ _id: req.body.id }, req.body)
        if (crea) {
            res.send({
                status: true,
                msg: "data update successfully",
                data: crea
            })
        }else{
            res.send({
                status: false,
                msg: "user not avalibale",
                data: crea
            })
        }
    } catch (error) {
        res.send({
            status: false,
            msg: "something went wrong",
            data: {}
        })
    }
}

export const desss = async (req, res) => {
    try {
        const del = await user.findByIdAndDelete({ email: req.body.email },req.body)
        if (del) {
            res.send({
                status: true,
                msg: "successfully delet",
                data: del
            })
        }
    } catch (error) {
        res.send({
            status: false,
            msg: "data not found ",
            data:{}
        })
    }
}



export const resendotp = async (req,res)=>{
    try {
        var val = Math.floor(1000 + Math.random() * 9000);
        console.log(val);
        req.body.otp = val
        const data = await user.findByIdAndUpdate({_id:req.body.id},req.body)
        if(data){
            res.send({
                status:true,
                msg:"otp send successfully",
                data:data

            })
        }else{
            res.send({
                status:false,
                msg:"something wrong"
            })
        }
    } catch (error) {
        res.send(error)
    }
}
