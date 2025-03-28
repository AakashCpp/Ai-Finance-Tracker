const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

//create schema for db
const UserSchema = new mongoose.Schema(
    {
        fullName :{
            type : String,
            required: true
        },

        email :{
            type :String,
            required:true,
            unique:true
        },
        password:{
            type : String,
            required:true
        },
        profileImageUrl: {
            type:String,
            default : null
        },
    },
    {timestamps:true}
);

//Hash password before saving 
// here userSchema.pre() -> mongodb middleware hook()
UserSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();
    this.password = await bcryptjs.hash(this.password, 10);
    next();
});

//compare passwords
UserSchema.methods.comparePassword = async function(candidatePassword){
    return await bcryptjs.compare(candidatePassword, this.password);
}

module.exports = mongoose.model('User', UserSchema);