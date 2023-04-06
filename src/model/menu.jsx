import { Schema, models, model } from "mongoose";

const menuSchema = new Schema({
  desc: String,
  price: Number,
  dateValid: String,
  status: String,
  isActive: Boolean,
});

// get existing from mongo or create new one
const Menus = models.menu || model("menu", menuSchema);

export default Menus;

/**

{
  "desc": "Putenrollbraten, Rotkohl & Kartoffeln oder Klöße",
  "price": "8.9",
  "dateValid": "2022-06-08",
  "status": "Special",
  "isActive": true
}

 */
