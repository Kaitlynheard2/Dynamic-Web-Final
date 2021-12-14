import React from "react";

function CreateUserForm({ signUpUser }) {
  return (
    <div className="Form">
      <form onSubmit={(e) => signUpUser(e)}>
        <label className="Labels" htmlFor="name">
          Full Name
        </label>
        <input type="name" name="name" placeholder="First Last"></input>

        <label className="Labels" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Cookingmama@omnom.com"
        ></input>

        <label className="Labels" htmlFor="password">
          Password
        </label>
        <input type="password" name="password" placeholder="********"></input>

        <button type="submit">SIGN UP</button>
      </form>
    </div>
  );
}

export default CreateUserForm;
