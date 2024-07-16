import React from "react";
import { useFetchUpdateUser } from "./allUsersSlice";
import { useEffect, useState } from "react";

export default function updateUser() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleUpdateUser = () => {
    useFetchUpdateUser(user);
    console.log("User updated successfully");
    setUser({
      firstName: "",
      lastName: "",
      password: "",
    });
  };
  return (
    <div>
      <h2>Update User Information</h2>
      <form>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
          />
        </div>
      </form>
      <button onClick={handleUpdateUser}>Update User</button>
    </div>
  );
}
