import React from "react";
import { useFetchAllUsersQuery } from "../users/allUsersSlice";

const Home = () => {
  const { data, error, isLoading } = useFetchAllUsersQuery() || {};

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }
  
  return (
    <div className="users">
      {data.users.map((user) => (
        <div className="user" key={user.userId}>
          <p> userId: {user.userId}</p>
          <p> firstName: {user.firstName} </p>
          <p> lastName: {user.lastName} </p>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => handleDelete(user.id)}
          >
            Delete
          </button>
          <button
            type="button"
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
