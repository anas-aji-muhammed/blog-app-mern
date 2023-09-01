const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const bcrypt = require('bcrypt');


const userSchema = new Schema({
    email: {type: String, required: true, unique:true},
    password: {type: String, required: true},
    username: {type: String, required: false, default: ""},
})

userSchema.pre('save', async function(next){
    const salt = await bcrypt.genSaltSync(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();

})

const userModel = model('User', userSchema);

module.exports = userModel;
