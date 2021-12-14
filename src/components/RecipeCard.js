import React from "react";

function RecipeCard({ recipe, userInformation }) {
  return (
    <div className="RecipeCardWrapper">
      <img src={recipe.imgSrc} alt={recipe.imageAlt} />
      <p className="DashboardUsername">{userInformation.displayName}</p>
      <p>{recipe.recipeDirections}</p>
      <p>{recipe.servings}</p>
      <p>{recipe.cooktime}</p>
    </div>
  );
}

export default RecipeCard;
