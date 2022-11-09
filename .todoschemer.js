const mongoose = require('mangoose')
const schema = mongoose.Schema;

const todoSchema = new schema({
    activity:{
        type:String,
        required:true

    },
    isCompleted: {
        type:Boolean,
        required:true,
        default:false
    }
})
const Todo= mongoose.module("todoaschema",todoSchema)
module.exports=Todo