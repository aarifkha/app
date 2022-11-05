import mongoose from "mongoose"

export const connectiontb = async (req,res)=>{
    const conn = await  new mongoose.connect("mongodb+srv://prod:JY0oarzslIFW4kE5@cluster0.dftrmtm.mongodb.net/?retryWrites=true&w=majority",
    {
      // "mongodb+srv://prod:JY0oarzslIFW4kE5@cluster0.dftrmtm.mongodb.net/?retryWrites=true&w=majority"
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected succcesfully",conn.connection.host);
}

export default connectiontb;