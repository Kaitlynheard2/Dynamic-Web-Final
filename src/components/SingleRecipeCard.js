import React from "react";

function SingleRecipeCard({ recipe }) {
  return (
    <div className="RecipeCardWrapper">
      <div>
        <img
          className="RecipeImage"
          src={recipe.imgSrc}
          alt={recipe.imageAlt}
        />
        <p></p>
        <p>
          <a className=" Green RecipeTitle" href={`/recipe/${recipe.id}`}>
            {recipe.recipeName}
          </a>
        </p>
        <p className="Gray RecipeLabels">
          <a className="ProfileLinks" href={`/user/${recipe.userID}`}>
            BY {recipe && recipe.userName}
          </a>
        </p>
      </div>
      <p className="Gray RecipeLabels">{recipe.servingSize} servings</p>
      <p className="Gray RecipeLabels">{recipe.cookTime} minutes</p>
      <p className="Subtitles">Ingredients</p>
      <p className="Gray RecipeLabels">{recipe.ingredients}</p>
      <p className="Subtitles">Directions</p>
      <p className="Gray RecipeLabels">{recipe.recipeDirections}</p>
    </div>
  );
}

export default SingleRecipeCard;
