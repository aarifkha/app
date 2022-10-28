import sbcate from "../module/modulell.js";

export const creats = async (req,res)=>{

    try {
        
    
    
    const rustam = await sbcate.create(req.body)

    res.send({
        status:true,
        msg:"successfully creat ",
        data:rustam
    })
} catch (error) {
        res.send({
            status:false,
            msg:"something went wrong",
            data:error
        })
}
}


export const getdatas = async (req,res)=>{
    try {
        
    
    const nana = await sbcate.find({status:"Active"}).populate("cateid").populate("createdBy")
    if(nana){
        res.send({
            status:true,
            msg:"daa fetch successfully .",
            data:nana
        })
    }else{
        res.send({
            status:false,
            msg:" not found.",
            data:{}
        })
    }
} catch (error) {
    res.send({
        status:false,
        msg:"something went wrong",
        data :error
    })
}

}