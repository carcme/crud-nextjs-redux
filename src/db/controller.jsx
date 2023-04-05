/** Controller */
import Users from "../model/user";

// GET : get all users : http://localhost:3000/api/users
export async function getUsers(req, res) {
  try {
    const users = await Users.find({});

    if (!users) return res.status(404).json({ error: "Data not Found" });

    res.status(200).json({ success: true, users });
  } catch (error) {
    res.status(404).json({ error: "Error While Fetching Data" });
  }
}

// GET : get single user : http://localhost:3000/api/users/1
export async function getUser(req, res) {
  try {
    const { userId } = req.query;

    if (userId) {
      const user = await Users.findById(userId);
      return res.status(200).json({ success: true, user });
    }
    res.status(404).json({ error: "User not Selected...!" });
  } catch (error) {
    res.status(404).json({ error: "Cannot get the User...!" });
  }
}

// POST : http://localhost:3000/api/users
export async function postUser(req, res) {
  try {
    const formData = req.body;

    //check we have some data to send
    if (!formData)
      return res.status(404).json({ error: "Form Data Not Provided...!" });

    const user = await Users.create(req.body);
    res.status(201).json({ success: true, user });
  } catch (error) {
    return res.status(404).json({ error });
  }
}

// PUT : http://localhost:3000/api/users/1
export async function putUser(req, res) {
  try {
    const { userId } = req.query;
    const formData = req.body;

    if (userId && formData) {
      const user = await Users.findByIdAndUpdate(userId, formData);
      res.status(200).json({ success: true, user });
    }
    res.status(404).json({ error: "User Not Selected...!" });
  } catch (error) {
    res.status(404).json({ error: "Error While Updating the Data...!" });
  }
}

// DEL : http://localhost:3000/api/users/1
export async function deleteUser(req, res) {
  try {
    const { userId } = req.query;

    if (userId) {
      const user = await Users.findByIdAndDelete(userId);
      return res.status(200).json({ success: true, user });
    }

    res.status(404).json({ error: "User Not Selected...!" });
  } catch (error) {
    res.status(404).json({ error: "Error While Deleting the User...!" });
  }
}
