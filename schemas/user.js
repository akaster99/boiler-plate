const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
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
    password:{
        type: String,
        required: true,
        maxlength: 100
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

userSchema.pre('save',async function(next){
    try{
        const user = this;
        if(!user.isModified('password')){
            next();
        }
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(user.password, salt);
        user.password = hash;
        next();
        
    }catch(err){
        console.error(err);
        next(err);
    }
})

userSchema.methods.comparePassword = function(plainpassword, cb) {
    bcrypt.compare(plainpassword,this.password,(err,isMatch)=>{
        if(err){
            return cb(err);
        }
        return cb(null, isMatch);
    })       
}

userSchema.methods.generateToken = async function(cb){
    try{
        const user = this;
        const token = jwt.sign({
            id: user._id,
            name: user._name,
            role: user.role 
        },process.env.JWT_SECRET);
        user.token = token; 
        savedUser = user.save();
        return cb(null,token);
    }catch(err){
        return cb(err);
    }
}

module.exports = mongoose.model('User', userSchema);