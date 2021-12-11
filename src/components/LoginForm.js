import React from "react";

function LoginForm({ loginUser }) {
  return (
    <div className="Form">
      <form onSubmit={(e) => loginUser(e)}>
        <label htmlFor="email" className="Labels">
          Email
        </label>
        <input
          className="InputBoxes"
          type="email"
          name="email"
          placeholder="Enter Email"
        ></input>

        <label htmlFor="password" className="Labels">
          Password
        </label>
        <input
          className="InputBoxes"
          type="password"
          name="password"
          placeholder="****"
        ></input>
        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
}

export default LoginForm;
