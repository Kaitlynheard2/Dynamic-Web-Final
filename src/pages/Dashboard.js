import React from "react";
import RecipeCard from "../components/RecipeCard";

const mock_data = [
  {
    imgSrc:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/macaroni-and-cheese-recipe-1622135326.png?crop=0.786xw:0.901xh;0.0731xw,0.00975xh&resize=640:*",
    imageAlt: "Mac and Cheese on a table",
    recipeDirections:
      "1. Cook macaroni according to the package directions. Drain.\\n2. In a saucepan, melt butter or margarine over medium heat. Stir in enough flour to make a roux. Add milk to roux slowly, stirring constantly. Stir in cheeses, and cook over low heat until cheese is melted and the sauce is a little thick. Put macaroni in large casserole dish, and pour sauce over macaroni. Stir well.\\n3. Melt butter or margarine in a skillet over medium heat. Add breadcrumbs and brown. Spread over the macaroni and cheese to cover. Sprinkle with a little paprika.\\n4. Bake at 350 degrees F (175 degrees C) for 30 minutes. Serve.",
    servingSize: 4,
    recipeName: "Mac and Cheese",
    cookTime: 30,
  },
];
function Dashboard({ userInformation }) {
  const upperCaseName = userInformation.displayName.toUpperCase();
  return (
    <div className="PageWrapper">
      <p>Dashboard</p>
      {mock_data.map((recipe, i) => (
        <RecipeCard upperCaseName={upperCaseName} recipe={recipe} key={i} />
      ))}
    </div>
  );
}

export default Dashboard;
