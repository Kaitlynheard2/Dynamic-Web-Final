import React from "react";
import RecipeCard from "../components/RecipeCard";

function UserProfile({ userInformation, recipe }) {
  return (
    <div className="UserProfilePageWrapper">
      <div className="ProfileCard">
        <div className="ProfileImage">
          <h1 className="Letter">
            {userInformation.displayName && userInformation.displayName[0]}
          </h1>
        </div>
        <h1 className="Green Subtitles">{userInformation.displayName}</h1>
        <p className="Labels">Allergies:</p>
      </div>
      <div className="RHSofPage">
        <div className="ProfileCard2">
          <p className="Labels UserProfileStats">Your Cookbooks</p>
          <p className="Labels UserProfileStats">Reactions</p>
          <p className="Labels UserProfileStats">Total Comments</p>
        </div>
        <section>
          {recipe &&
            recipe.map((recipe, i) => <RecipeCard recipe={recipe} key={i} />)}
        </section>
      </div>
    </div>
  );
}

export default UserProfile;
