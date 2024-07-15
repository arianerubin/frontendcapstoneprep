import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "./RegisterSlice";

export default function Register() {
  const [registerUser] = useRegisterMutation();

  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const updateForm = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      let success = false;
      console.log(form);
      success = await registerUser(form).unwrap();
      if (success) {
        navigate("/Login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signupform">
      <h2>Create an Account</h2>
      <form onSubmit={submit}>
        <div className="form-group">
          <label>First Name</label>
          <div className="input-icon">
            <i className="fas fa-user"></i>
            <input
              type="firstName"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="First Name"
              name="firstName"
              onChange={updateForm}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <div className="input-icon">
            <i className="fas fa-user"></i>
            <input
              type="lastName"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Last Name"
              name="lastName"
              onChange={updateForm}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Email address</label>
          <div className="input-icon">
            <i className="fas fa-envelope"></i>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
              onChange={updateForm}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Password</label>
          <div className="input-icon">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              onChange={updateForm}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
