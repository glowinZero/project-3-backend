const mongoose = require('mongoose');
const {Schema, model} = mongoose; 

const noteSchema = new Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    date: { type: Date},
    user: { type: Schema.Types.ObjectId, ref:'User' },
});

module.exports = model("Note", noteSchema);