import { useNavigate } from "react-router-dom";
import { useDeleteUserMutation } from "./deleteSlice";

export default function deleteSpecificUser() {
  const [deleteMutation, { errorD, loadingD }] = useDeleteUserMutation();
  const navigate = useNavigate();

  if (loadingD) {
    return <p>Loading...</p>;
  }

  if (errorD) {
    return <div>Error: {error.message}</div>;
  }

  const deleteU = async (userId) => {
    try {
      if (loadingD) {
        console.log("Loading deletion of User");
      }
      await deleteMutation(userId);
      alert("User deleted successfully");
      navigate("/account");
      window.location.reload();
    } catch (error) {
      console.error("Failed to Delete User", error);
      alert("Failed to Delete User");
    }
  };

  return (
    <div>
      {data?.user?.map((user) => {
        return (
          <ul key={user.id}>
            <li className="user" key={user.userId}>
              <p> userId: {user.userId}</p>
              <p> firstName: {user.firstName} </p>
              <p> lastName: {user.lastName} </p>
              <button
                type="button"
                onClick={() => deleteU(user.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </li>
          </ul>
        );
      })}
      ;
    </div>
  );
}
