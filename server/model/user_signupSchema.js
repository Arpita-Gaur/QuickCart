import mongoose from "mongoose";


const user_signupSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        unique: false
    },
    lastname: {
        type: String,
        required: true,
        unique: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    number: {
        type: String,
        required: true,
        unique: true,
        min:10,
        max:10
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim:true
    },
    password: {
        type: String,
        required: true,
        unique: false,
        min:8

    }

});

const User = mongoose.model('user', user_signupSchema);

export default User;