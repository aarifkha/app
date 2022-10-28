import mongoose from "mongoose";

const categoryschma = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
   status:{
    type:String,
    enum:["active","inactive"],
    default:"active"
   },
   
   createdAt: { type: Date, default: Date.now },
   updatedAt: { type: Date, default: Date.now }
})

const Category = mongoose.model("categories",categoryschma)

export default Category;