import mongoose from "mongoose";
import producimage from "./product.imaage.modal.js";
const productSchma = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    prize: {
        type: String,
        required: true
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId, ref: 'users'
    },
    is_popular: {
        type: Boolean,
        default: 0
    },
    description: {
        type: String,
        required: true
    },
    images: [producimage],
    status: {
        type: String,
        enum: ["Active", "Deactive"],
        default: "Active"
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },

})

export const product = mongoose.model("produc", productSchma)
export default product;