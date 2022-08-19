const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema(
    {
        fname: {type: String , required: true},
        lname: {type: String , required: true},
        email: {type: String , required: true},
        password: {type: String , required: true}
    }
);

const User = mongoose.model("User", NewsSchema);


module.exports = User;