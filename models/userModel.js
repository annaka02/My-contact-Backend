const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type : String,
        required: [true, "Please ass the user name"],
    },
    email: {
        type : String,
        required: [true, "Please ass the user email address"],
        unique: [true, "Email address already taken"],
    },
    email: {
        type : String,
        required: [true, "Please ass the user email password"]
    },
},
    {
        Timestamp:true,
    }

);

module.exports = mongoose.model("User", userSchema);