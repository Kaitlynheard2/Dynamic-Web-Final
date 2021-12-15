import React from "react";
import RecipeCard from "../components/RecipeCard";

function UserProfile({ userInformation, recipe }) {
  console.log(recipe);
  return (
    <div className="UserProfilePageWrapper">
      <div className="ProfileCard">
        <div className="ProfileImage">
          <h1 className="Letter">
            {userInformation.displayName && userInformation.displayName[0]}
          </h1>
        </div>
        <h1 className="Green Subtitles">{userInformation.displayName}</h1>
      </div>
      <div className="RHSofPage">
        {recipe &&
          recipe.map((recipe, i) => <RecipeCard recipe={recipe} key={i} />)}
      </div>
    </div>
  );
}

export default UserProfile;

/*
I want to implement this later
<div className="ProfileCard2">
          <p className="Labels UserProfileStats">Your Cookbooks</p>
          <p className="Labels UserProfileStats">Reactions</p>
          <p className="Labels UserProfileStats">Total Comments</p>
        </div>

        */
