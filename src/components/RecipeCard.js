import React from "react";

function RecipeCard({ recipe }) {
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
          <a className=" Green RecipeTitle" href={`user/${recipe.postID}`}>
            {recipe.recipeName}
          </a>
        </p>
        <p className="Gray RecipeLabels">
          <a className="ProfileLinks" href={`/user/${recipe.userID}`}>
            BY {recipe.userName.toUpperCase()}
          </a>
        </p>
      </div>

      <p className="Gray RecipeLabels">{recipe.servingSize} servings</p>
      <p className="Gray RecipeLabels">{recipe.cookTime} minutes</p>
    </div>
  );
}

export default RecipeCard;
