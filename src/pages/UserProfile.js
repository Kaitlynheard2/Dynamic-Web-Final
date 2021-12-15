import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SingleRecipeCard from "../components/SingleRecipeCard";

const url = `http://localhost:4000` || process.env.REACT_APP_BACKEND_URL;
function UserProfile({ userInformation, recipe }) {
  const [recipes, setRecipes] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`${url}/posts/${id}`)
      .then(function (response) {
        console.log({ response });
        setRecipes(response.data);
      })
      .catch(function (error) {
        // handle error
        console.warn(error);
      });
  }, [id]);

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
        {recipes &&
          recipes.map((recipes, i) => (
            <SingleRecipeCard recipe={recipes} key={i} />
          ))}
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
