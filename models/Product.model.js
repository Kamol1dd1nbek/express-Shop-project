const { Schema, model } = require("mongoose");

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
},
{
    versionKey: false,
    timestamps: true
});

module.exports = model("Product", productSchema);