const mongoose = require('mongoose');

const { Schema } = mongoose;

const { Types: {ObjectId} } = Schema;

const userSchema = new Schema({
    name:{
        type: String,
        maxlength: 50,
        required: true
    },
    email:{
        type: String,
        trim: true,
        unique: 1,
        required: true
    },
    passpord:{
        type: String,
        required: true,
        maxlength: 50,
    },
    role:{
        type: Number,
        default: 0
    },
    image: String,
    token:{
        type: String,
    },
    tokenExp: {
        type:Number,

    },
});

module.exports = mongoose.model('User', userSchema);