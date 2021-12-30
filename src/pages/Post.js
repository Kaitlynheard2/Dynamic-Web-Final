import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SingleRecipeCard from "../components/SingleRecipeCard";

const url =
  `http://localhost:4000` || `https://pure-chamber-89039.herokuapp.com/`;
function Post() {
  const [singleRecipe, setSingleRecipe] = useState({});
  let { id } = useParams();
  useEffect(() => {
    axios
      .get(`${url}/recipe/${id}`)
      .then(function (response) {
        console.log({ response });
        setSingleRecipe(response.data);
      })
      .catch(function (error) {
        console.warn(error);
      });
  }, [id]);
  return (
    <div className="DashboardPageWrapper">
      <SingleRecipeCard recipe={singleRecipe}></SingleRecipeCard>
    </div>
  );
}

export default Post;
