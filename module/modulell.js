import mongoose  from "mongoose";

const sbcatgoryschma = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["Active","Deactive"],
        default:"Active"
    },
    cateid:{
type:mongoose.Schema.Types.ObjectId, ref: 'categories'
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId, ref: 'users' 
    },
    createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
})

export const sbcate = mongoose.model("sdfghj",sbcatgoryschma)
export default sbcate;