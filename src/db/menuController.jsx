/** Controller */
import Menus from "@/model/menu";

// GET : get all menus : http://localhost:3000/api/menu
export async function getMenus(req, res) {
  try {
    const menus = await Menus.find({});

    if (!menus) return res.status(404).json({ error: "Menus not Found" });

    res.status(200).json({ menus });
  } catch (error) {
    res.status(404).json({ error: "Error While Fetching Menus" });
  }
}

// GET : get single menu : http://localhost:3000/api/menu/1
export async function getMenu(req, res) {
  try {
    const { menuId } = req.query;

    if (menuId) {
      const menu = await Menus.findById(menuId);
      return res.status(200).json({ menu });
    }
    res.status(404).json({ error: "Menu not Selected...!" });
  } catch (error) {
    res.status(404).json({ error: "Cannot get the Menu...!" });
  }
}

// POST : http://localhost:3000/api/menu
export async function postMenu(req, res) {
  try {
    const formData = req.body;

    //check we have some data to send
    if (!formData)
      return res.status(404).json({ error: "Form Data Not Provided...!" });

    const menu = await Menus.create(req.body);
    res.status(201).json({ menu });
  } catch (error) {
    return res.status(404).json({ error });
  }
}

// PUT : http://localhost:3000/api/menu/1
export async function putMenu(req, res) {
  try {
    const { menuId } = req.query;
    const formData = req.body;

    if (menuId && formData) {
      const menu = await Menus.findByIdAndUpdate(menuId, formData);
      return res.status(200).json({ menu });
    }
    res.status(404).json({ error: "Menu Not Selected...!" });
  } catch (error) {
    res.status(404).json({ error: "Error While Updating the Menu...!" });
  }
}

// DEL : http://localhost:3000/api/menu/1
export async function deleteMenu(req, res) {
  try {
    const { menuId } = req.query;

    if (menuId) {
      const menu = await Menus.findByIdAndDelete(menuId);
      return res.status(200).json({ menu });
    }

    res.status(404).json({ error: "Menu Not Selected...!" });
  } catch (error) {
    res.status(404).json({ error: "Error While Deleting the Menu...!" });
  }
}
