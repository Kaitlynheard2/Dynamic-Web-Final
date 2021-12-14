import React from "react";
import { mock_data } from "./Dashboard";
import RecipeCard from "../components/RecipeCard";

function UserProfile({ userInformation }) {
  return (
    <div className="UserProfilePageWrapper">
      <div className="ProfileCard">
        <div className="ProfileImage"></div>
        <h1 className="Green Subtitles">{userInformation.displayName}</h1>
        <p className="Labels">Allergies:</p>
      </div>
      <div className="RHSofPage">
        <section className="UserProfileSection1">
          <div className="ProfileCard2">
            <p className="Labels UserProfileStats">Your Cookbooks</p>
            <p className="Labels UserProfileStats">Reactions</p>
            <p className="Labels UserProfileStats">Total Comments</p>
          </div>
        </section>
        <section>
          {mock_data.map((recipe, i) => (
            <RecipeCard recipe={recipe} key={i} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default UserProfile;
