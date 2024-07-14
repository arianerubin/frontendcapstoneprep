import React from "react";
import { useNavigate } from "react-router-dom";
import allUsersSlice from "../users/allUsersSlice";
import { api } from "../../app/api";

// get all users
const getAllUsers = () => {
  const { data, error, isLoading } = useFetchGetAllUsersQuery();

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error loading Users</div>;
  }

  return (
    <div className="users">
      {data.users.map((user) => (
        <div className="user" key={user.userId}>
          <p> userId: {user.userId}</p>
          <p> firstName: {user.firstName} </p>
          <p> lastName: {user.lastName} </p>
        </div>
      ))}
      ;
    </div>
  );
};

// update User
const UpdateUser = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  console.log("User updated successfully");
  setUser({
    firstName: "",
    lastName: "",
    password: "",
  });

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
};

// delete user

const DeleteUser = ({ userId }) => {
  const [error, setError] = useState(null);

  const handleDeleteUser = async () => {
    try {
      const response = await DeleteUser(userId);

      console.log("User deleted successfully");
    } catch (error) {
      console.error("Error deleting user:", error);
      setError("Failed to delete user. Please try again.");
    }
  };

  return (
    <div>
      <h2>Delete User</h2>
      <button onClick={handleDeleteUser}>Delete User</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default getAllUsers;
