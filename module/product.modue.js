import mongoose from "mongoose";

const productSchma = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})

export const product = mongoose.model("produc", productSchma)
export default product;