/**
 * get all users
 * @returns
 */
export const getUsers = async () => {
  console.log("getAllUsers");
  const res = await fetch(`/api/users`);
  const json = await res.json();
  return json;
};

/**
 * single user
 * @param {*} userId
 * @returns
 */
export const getUser = async (userId) => {
  console.log("getUser");
  const response = await fetch(`/api/users/${userId}`);
  const json = await response.json();
  if (json) return json;
  return {};
};

/**
 * create a new user
 * @param {*} formData
 * @returns
 */
export async function addUser(formData) {
  console.log("createUser");
  try {
    const Options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    const response = await fetch(`api/users`, Options);
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
export async function updateUser(userId, formData) {
  console.log("updateUser");
  const Options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };

  const response = await fetch(`api/users/${userId}`, Options);
  const json = await response.json();
  return json;
}

/**
 * Delete a user
 * @param {userId} userId
 * @returns
 */
export async function deleteUser(userId) {
  console.log("deleteUser");
  const Options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" }, // is this needed?
  };

  const response = await fetch(`api/users/${userId}`, Options);
  const json = await response.json();
  return json;
}
