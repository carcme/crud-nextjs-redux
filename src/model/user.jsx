import { Schema, models, model } from "mongoose";

const userSchema = new Schema({
  name: String,
  avatar: String,
  email: String,
  salary: Number,
  date: String,
  status: String,
});

// get existing from mongo or create new one
const Users = models.user || model("user", userSchema);

export default Users;
