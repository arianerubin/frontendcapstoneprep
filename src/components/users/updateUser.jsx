import React, { useState } from "react";
// import { useFetchUpdateUserQuery } from "./updateUserSlice";
import { useSelector } from "react-redux";
import { useUpdateUserMutation } from "./updateUserSlice";

const updateSpecificUser = () => {
  const user = useSelector((state) => {
    return state.user.value;
  });
  console.log("USER??@@?@?@?@?", user);
  const [formState, setFormState] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    password: user.password,
  });

  const [updateUser] = useUpdateUserMutation();
  console.log(updateUser);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...formState, [name]: value });
  };

  const handleSubmit = async (event) => {
    console.log("event :>> ", event);
    event.preventDefault();
    try {
      const body = formState;
      console.log("bodyyydy", body);
      console.log("IDDDD", user.id);
      // await updateUser({ id: user.id, body });
      // alert("User successfully");
      //   // Navigate("Home");
      //   window.location.reload();
    } catch (error) {
      console.error("Failed to Update User", error);
      alert("Failed to Update User");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputFirstName">First Name</label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            aria-describedby="firstNameHelp"
            placeholder="Enter first name"
            value={formState.firstName}
          />
          <input
            type="text"
            name="lastName"
            className="form-control"
            aria-describedby="lastNameHelp"
            placeholder="Enter last name"
            value={formState.lastName}
          />
          <label htmlFor="exampleInputPassword">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword"
            placeholder="Enter new password"
            value={formState.password}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update Account
        </button>
      </form>
    </div>
  );
};

export default updateSpecificUser;
