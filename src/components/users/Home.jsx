import React from "react";
import { useNavigate } from "react-router-dom";
import { userApi } from "./allUsersSlice";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser, deleteUser } from "./allUsersSlice";

const Home = () => {
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetAllUsersQuery();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.data);

  const handleDelete = async (userId) => {
    try {
      if (loadingD) {
        console.log("Loading return of book");
      }
      await deleteMutation(id);
      alert("User deleted successfully");
      navigate("/Home");
      window.location.reload();
    } catch (error) {
      console.error("Failed to delete user", error);
      alert("Failed to delete user");
    }
  };

  const handleUpdate = () => {
    navigate(`/Home`);
  };

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
          <button
            type="submit"
            className="btn btn-success"
            onClick={() => handleDelete(user.id)}
          >
            Delete
          </button>
          <button
            type="submit"
            className="btn btn-success"
            onClick={() => handleUpdate(user.id)}
          >
            Update
          </button>
        </div>
      ))}
      ;
    </div>
  );
};

export default Home;
