import React from "react";

function AddPostForm({ SubmitPost }) {
  return (
    <div className="AddPostPageWrapper">
      <h1 className="createPostSubtitle">New Recipe</h1>
      <form onSubmit={(e) => SubmitPost(e)}>
        <div className="AddPostWrapper">
          <label className="createPostLabels" htmlFor="name">
            Recipe Name
          </label>
          <input
            className="createPostInput"
            type="name"
            name="recipeName"
            placeholder="Ex. Charlie's Deluxe Chocolate cookie"
          ></input>

          <label className="createPostLabels" htmlFor="text">
            Ingredients
          </label>
          <textArea
            rows="5"
            className="createPostInput"
            type="text"
            name="ingredients"
            placeholder="3/4 cups of happiness"
          ></textArea>

          <label className="createPostLabels" htmlFor="text">
            Directions
          </label>
          <textArea
            rows="5"
            className="createPostInput"
            type="text"
            name="directions"
            placeholder="1. Combine ingredients together in a medium-sized bowl"
          ></textArea>

          <label className="createPostLabels" htmlFor="text">
            Image Url
          </label>
          <input
            className="createPostInput"
            type="url"
            name="imgURL"
            placeholder="http://yummyphoto.jpg"
          ></input>

          <label className="createPostLabels" htmlFor="text">
            Image Alt
          </label>
          <input
            className="createPostInput"
            type="text"
            name="imgAlt"
            placeholder="delicious meal on a table"
          ></input>

          <label className="createPostLabels" htmlFor="text">
            Servings
          </label>
          <input
            className="createPostInput"
            type="number"
            name="servings"
            placeholder="1"
          ></input>

          <label className="createPostLabels" htmlFor="text">
            Cooktime
          </label>
          <input
            className="createPostInput"
            type="number"
            name="cooktime"
            placeholder="30"
          ></input>

          <button className="createButton" type="submit">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddPostForm;
