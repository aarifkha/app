import mongoose from "mongoose";

const producimage = new mongoose.Schema({
    path:{
        type:String,
        required:true
    },
    fulpath:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
})

export default producimage;