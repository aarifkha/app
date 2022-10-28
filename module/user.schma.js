import mongoose, { mongo } from "mongoose";
 
const schmas = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    token:{
        type:String,
        required:false
    },
 
})

 const user = mongoose.model("users",schmas);
export default user;