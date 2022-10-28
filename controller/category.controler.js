import Category from "../module/category.module.js";
import  express  from "express";


export const catego =async (req,res)=>{
    try {
        var kuku = await Category.findOne({name:req.body.name})
        if(kuku){
            res.send({
                status:false,
                msg:"Category alerady exict",
                data:{}
            })
            return;
        }
        var mumu = await Category.create(req.body)
        if(mumu){
            res.send({
                status:true,
                msg:"creat successfully",
                data : mumu
            })
            return;
        }
    } catch (error) {
        res.send({
            status:false,
            msg:"something went wrong",
            data:error
        })
    }
}

export const getdata = async (req,res)=>{
    try {
        var mama = await Category.find(req.body)
        if(mama.length > 0){
            res.send({
                status:true,
                msg:"daa fetch successfully .",
                data:mama
            })
        }else{
            res.send({
                status:true,
                msg:"category not found.",
                data:mama
            })
        }
    } catch (error) {
        res.send({
            status:false,
            msg:"something went wrong",
            data :{}
        })
    }

}