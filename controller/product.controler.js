import product from "../module/product.modue.js";

export const cre = async (req,res)=>{
    try {
        const mm = await product.create(req.body)
        res.send(mm)
    } catch (error) {
        res.send(error)
    }
}