import React from "react";

function CreateUserForm({ signUpUser }) {
  return (
    <div className="Form">
      <h2>Create An Account</h2>
      <form onSubmit={(e) => signUpUser(e)}>
        <label htmlFor="name">Full Name</label>
        <input
          type="name"
          name="name"
          placeholder="Enter Your Fullname"
        ></input>

        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="Enter Your Email"></input>

        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="****"></input>

        <button type="submit">Create User</button>
      </form>
    </div>
  );
}

export default CreateUserForm;
