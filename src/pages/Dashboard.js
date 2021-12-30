import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import axios from "axios";

const url = `https://pure-chamber-89039.herokuapp.com`;
//`http://localhost:4000`
function Dashboard() {
  const [recipe, setRecipe] = useState();
  useEffect(() => {
    axios
      .get(url)
      .then(function (response) {
        console.log({ response });
        setRecipe(response.data);
      })
      .catch(function (error) {
        //handle error
        console.log(error);
      });
  }, []);

  return (
    <div className="DashboardPageWrapper">
      {recipe &&
        recipe.map((recipe, i) => <RecipeCard recipe={recipe} key={i} />)}
    </div>
  );
}

export default Dashboard;
