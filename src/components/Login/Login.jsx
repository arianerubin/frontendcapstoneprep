import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "./LoginSlice";
// import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [login] = useLoginMutation();

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
      success = await login(form).unwrap();
      if (success) {
        navigate("/Home");
      }
      console.log(success);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="loginCard">
      <form onSubmit={submit}>
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
        <button
          type="submit"
          className="btn btn-success"
          onClick={() => navigate("/Register")}
        >
          Register
        </button>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
