import React from "react";
import { useNavigate } from "react-router-dom";
import { useDeleteUserMutation } from "./deleteSlice";

const DeleteSpecificUser = ({ user }) => {
  const [deleteMutation] = useDeleteUserMutation();
  const navigate = useNavigate();

  console.log("Users prop received:", user);

  const deleteU = async (userId) => {
    try {
      await deleteMutation(userId).unwrap();
      alert("User deleted successfully");
      navigate("/Home");
      window.location.reload();
    } catch (error) {
      console.error("Failed to Delete User", error);
      alert("Failed to Delete User");
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="deleteUser">
        {user?.map((users) => {
          return (
            <div className="" key={users.id}>
              <p>email: {users.email}</p>
              <p>firstName: {users.firstName}</p>
              <p>id: {users.userId}</p>
              <p>lastName: {users.lastName}</p>
              <button
                type="button"
                onClick={() => deleteU(users.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DeleteSpecificUser;
