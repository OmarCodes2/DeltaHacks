const mongoose = require('mongoose');
const { stringify } = require('querystring');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
         type: String,
         required: true,
         unique: true
    },
    password:{
        type: String,
        required: true
    },
    firstName: String,
    lastName: String,
    faculty: String,
    program: String,
    year: Number,
    genderPref: Boolean,
    genderIdentity: Number,
    pet: Boolean,
    tobacco: Boolean,
    tobaccoUser: Boolean,
    cannabis: Boolean,
    cannabisUser: Boolean,
    vape: Boolean,
    vapeUser: Boolean,
    alcohol: Boolean,
    alcoholUser: Boolean,
    wakeUpTime: Number,
    bedTime: Number,
    guests: Number,
    guestsUser: Number,
    groupSize: Number,
    numberRoomates: Number,
    maxRent: Number,
    cleaning: Number,
    cooking: Number,
})

const Users = mongoose.model("Users", UserSchema);
module.exports = Users;