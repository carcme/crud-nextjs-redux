import connectMongo from "@/db/conn";
import { getMenus, postMenu, putMenu, deleteMenu } from "@/db/menuController";

export default async function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: "Error in the Connection" })
  );

  // type of request
  const { method } = req;

  switch (method) {
    case "GET":
      getMenus(req, res);
      break;

    case "POST":
      postMenu(req, res);
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
