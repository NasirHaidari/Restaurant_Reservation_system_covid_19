import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import AdminAddRemove from "./AdminAddRemove";

function Admin() {
  const { register, handleSubmit, errors } = useForm();
  const [gotToken, setGotToken] = useState(false);

  const onSubmit = (data) => {
    axios
      .post("http://localhost:3000/login", data)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem(
          "token",
          JSON.stringify(res.data.token.access_token)
        );
        console.log(localStorage.getItem("token"));
        setGotToken(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {gotToken ? (
        <AdminAddRemove />
      ) : (
        <div className="container d-flex flex-column justify-content-center admin_form">
        <h1 className="log text-center display-3 font-weight-bold">épices</h1>
          <h1 className="text-center mb-5">Login </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Username</label>
              <input
                className="form-control"
                type="text"
                placeholder="Username"
                name="username"
                ref={register({
                  required: "Username required",
                })}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                ref={register({
                  required: "Password Required",
                })}
              />
            </div>
            {errors.username && <p>{errors.username.message}</p>}
            {errors.password && <p>{errors.password.message}</p>}

            <input type="submit" className="btn btn-success mt-3" />
          </form>
        </div>
      )}
    </>
  );
}

export default Admin;
