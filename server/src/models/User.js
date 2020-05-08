import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
});

module.exports = model("User", UserSchema);
