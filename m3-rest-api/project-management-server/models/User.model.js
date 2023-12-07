const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    email: { type: String, required: true},
    password: { type: String, required:true}, 
    firstName: {type: String, required: true},
    lastName: { type: String, required: true },
    cohort: {type: String},
    campus: {type: String},
	  manager: { type: String},
    teacher: { type: String},
    role: {type: String},
    isStudent: {type: Boolean, required:true},
    task: [{ type: Schema.Types.ObjectId, ref:'Task' }]
  }
);

const User = model("User", userSchema);

module.exports = User;
