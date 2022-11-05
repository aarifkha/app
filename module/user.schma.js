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
    number_verfiy:{
        type:Boolean,
        required:false,
        default:false
    },
    otp:{
        type:Number,
        required:false,
        default:false
    }
 
})

 const user = mongoose.model("useer",schmas);
export default user;