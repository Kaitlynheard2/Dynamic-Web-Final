import React from "react";

function UserProfile({ userInformation }) {
  return (
    <div className="UserProfilePageWrapper">
      <div className="ProfileCard">
        <div className="ProfileImage"></div>
        <h1 className="Green Subtitles">{userInformation.displayName}</h1>
        <p className="Labels">Allergies:</p>
      </div>
      <section className="UserProfileSection1">
        <div className="ProfileCard2">
          <p className="Labels">Your Cookbooks</p>
          <p className="Labels">Reactions</p>
          <p className="Labels">Total Comments</p>
        </div>
      </section>
    </div>
  );
}

export default UserProfile;
