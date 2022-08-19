const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {type: String , required: true},
    category: {type: String , required: true},
    price: {type: String , required: true},
    cutoffPrice: {type: String , required: true},
    img: [],
    img2: String 
});

