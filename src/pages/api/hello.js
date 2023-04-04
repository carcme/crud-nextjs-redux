import connectMongo from "../../db/conn";

export default function handler(req, res) {
  connectMongo();
  res.status(200).json({ name: "John Doe" });
}
models.user;
