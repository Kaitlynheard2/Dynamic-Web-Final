import React, { useCallback, setErrors } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import CreateUserForm from "../components/CreateUserForm";

function CreateUser({ setLoggedIn, setUserInformation }) {
  const signUpUser = useCallback(
    (e) => {
      e.preventDefault();

      const email = e.currentTarget.email.value;
      const password = e.currentTarget.password.value;
      const name = e.currentTarget.name.value;

      const auth = getAuth();

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setLoggedIn(true);
          setUserInformation({
            email: user.email,
            displayName: name,
            uid: user.uid,
            accessToken: user.accessToken,
          });

          updateProfile(auth.currentUser, {
            displayName: name,
          })
            .then(() => {
              return true;
            })
            .catch((error) => {
              return setErrors(error.errorMessage);
            });
          console.log({ user });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.warn({ error, errorCode, errorMessage });
        });
    },
    [setLoggedIn, setUserInformation]
  );

  return (
    <div className="PageWrapper">
      <h1 className="Green Subtitles">Create Account</h1>
      <CreateUserForm signUpUser={signUpUser} />
    </div>
  );
}

export default CreateUser;
