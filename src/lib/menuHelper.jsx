/**
 * get all users
 * @returns
 */
export const getMenus = async () => {
  const res = await fetch(`/api/menu`);
  const json = await res.json();
  return json;
};

/**
 * single user
 * @param {*} userId
 * @returns
 */
export const getMenu = async (userId) => {
  const response = await fetch(`/api/menu/${userId}`);
  const json = await response.json();
  if (json) return json;
  return {};
};

/**
 * create a new user
 * @param {*} formData
 * @returns
 */
export async function addMenu(formData) {
  try {
    const Options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    const response = await fetch(`api/menu`, Options);
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
}

/**
 * Update a user
 * @param {*} userId
 * @param {*} formData
 * @returns
 */
export async function updateMenu(userId, formData) {
  console.log("updateUser");
  const Options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };

  const response = await fetch(`api/menu/${userId}`, Options);
  const json = await response.json();
  return json;
}

/**
 * Delete a user
 * @param {userId} userId
 * @returns
 */
export async function deleteMenu(userId) {
  console.log("deleteUser");
  const Options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" }, // is this needed?
  };

  const response = await fetch(`api/menu/${userId}`, Options);
  const json = await response.json();
  return json;
}
