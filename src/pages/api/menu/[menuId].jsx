import connectMongo from "@/db/conn";
import { getMenu, putMenu, deleteMenu } from "@/db/menuController";

export default async function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: "Error in the Connection" })
  );

  // type of request
  const { method } = req;

  switch (method) {
    case "GET":
      getMenu(req, res);
      break;

    case "PUT":
      putMenu(req, res);
      break;

    case "DELETE":
      deleteMenu(req, res);
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowd`);
      break;
  }
}
