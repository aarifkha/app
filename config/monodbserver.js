import mongoose from "mongoose"

export const connectiontb = async (req,res)=>{
    const conn = await  new mongoose.connect("mongodb://localhost:27017/appi",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected succcesfully",conn.connection.host);
}

export default connectiontb;