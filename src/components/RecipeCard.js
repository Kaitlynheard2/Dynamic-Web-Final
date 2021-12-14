import React from "react";

function RecipeCard({ recipe, upperCaseName }) {
  return (
    <div className="RecipeCardWrapper">
      <div>
        <img
          className="RecipeImage"
          src={recipe.imgSrc}
          alt={recipe.imageAlt}
        />
      </div>
      <p>{recipe.recipeName}</p>
      <p className="DashboardUsername">BY {upperCaseName}</p>
      <p>{recipe.servingSize} servings</p>
      <p>{recipe.cookTime} minutes</p>
    </div>
  );
}

export default RecipeCard;
