const mongoose = require('mongoose');

const IncomeSchema = mongoose.Schema({
    userId : {type : mongoose.Schema.Types.ObjectId, ref: "User", required:true},
    icon:{type:String},
    source:{type:String , required:true}, //example=> salary, freelancing
    amount:{type:Number, required:true},
    date:{type:Date, default: Date.now}
},
{timestamps:true}
);

module.exports = mongoose.model("Income", IncomeSchema);
