const mongoose = require('mongoose');
const {Schema, model } = mongoose; 

const taskSchema = new Schema({
    title: { type: String, required: true }, 
    deadline: { type: Date},
    status: { type: String, required: true, enum: ['To do', 'Done'] },
    user: { type: String },
})

module.exports = model("Task", taskSchema); 