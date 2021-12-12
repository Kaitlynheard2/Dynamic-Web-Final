import React from "react";

function UserProfile({ userInformation }) {
  return (
    <div className="PageWrapper">
      <div className="ProfileCard">
        <h1 className="Subtitles">{userInformation.displayName}</h1>
        <p>Allergies:</p>
      </div>
      <p> EMAIL: {userInformation.email} </p>
      <p> NAME: {userInformation.displayName} </p>
      <p> UID: {userInformation.uid} </p>
    </div>
  );
}

export default UserProfile;
