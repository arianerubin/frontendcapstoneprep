import { useState, useEffect } from "react";
import { useFetchAllUserQuery } from "../users/allUsersSlice";
import { useDeleteUserMutation } from "./deleteSlice";
import { useUpdateUserMutation, setUserToBeEdited } from "./updateUserSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const { data, error, isLoading, isSuccess } = useFetchAllUserQuery();
  const [deleteMutation] = useDeleteUserMutation();
  const [updateMutation] = useUpdateUserMutation();

  useEffect(() => {
    setUsers(data);
  }, [isSuccess]);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  const deleteUser = async (user) => {
    console.log(user);
    try {
      await deleteMutation(user).unwrap();
      alert("User deleted successfully");
      navigate("/Home");
      window.location.reload();
    } catch (error) {
      console.error("Failed to Delete User", error);
      alert("Failed to Delete User");
    }
  };

  const updateUser = async (user) => {
    try {
      dispatch(setUserToBeEdited(user));
      navigate(`/edit/${user.id}`);
      // await updateMutation(user).unwrap();
      // console.log("User updated successfully");
    } catch (error) {
      console.error("Failed to Update User", error);
      alert("Failed to Update User");
    }
  };
  // setUsers[data];

  console.log("Fetched users data:", data);
  return (
    <>
      <div className="users">
        {users?.map((user) => {
          console.log("Single User: ", user);
          return (
            <div className="user" key={user.id}>
              <p> {user.id}</p>
              <p> {user.firstName} </p>
              <p> {user.lastName} </p>
              <p> {user.email}</p>
              <button
                type="button"
                className="btn btn-success"
                onClick={() => deleteUser(user.id)}
              >
                Delete
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
