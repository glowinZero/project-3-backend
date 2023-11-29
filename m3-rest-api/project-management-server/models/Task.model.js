const mongoose = require('mongoose');
const {Schema, model } = mongoose; 

const taskSchema = new Schema({
    title: { type: String, required: true }, 
    body: { type: String, required: true },
    deadline: { type: Date},
    status: { type: Boolean, required: true },
    user: { type: Schema.Types.ObjectId, ref:'User' },
})

module.exports = model("Task", taskSchema);