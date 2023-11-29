const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    email: { type: String, required: true},
    password: { type: String, required:true}, 
    firstName: {type: String, required: true},
    lastName: { type: String, required: true },
    cohort: {type: String, required: true},
    campus: {type: String, reqired: true},
	  manager: { type: Schema.Types.ObjectId, ref:'Manager' },
    teacher: { type: Schema.Types.ObjectId, ref:'teacher' },
    isStudent: {type: Boolean, required:true},
    Task: [{ type: Schema.Types.ObjectId, ref:'Task' }]
  }
);

const User = model("User", userSchema);

module.exports = User;
