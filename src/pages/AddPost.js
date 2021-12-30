import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AddPostForm from "../components/AddPostForm";

const baseURL =
  `http://localhost:4000` || `https://pure-chamber-89039.herokuapp.com/`;

function AddPost({ userInformation }) {
  const navigate = useNavigate();
  function SubmitPost(e) {
    e.preventDefault();
    const recipeName = e.currentTarget.recipeName.value;
    const ingredients = e.currentTarget.ingredients.value;
    const recipeDirections = e.currentTarget.recipeDirections.value;
    const imgSrc = e.currentTarget.imgSrc.value;
    const imgAlt = e.currentTarget.imgAlt.value;
    const servingSize = e.currentTarget.servingSize.value;
    const cookTime = e.currentTarget.cookTime.value;
    const userName = userInformation.displayName;
    const userID = userInformation.uid;

    const url = `${baseURL}/create?recipeName=${recipeName}&ingredients=${ingredients}&recipeDirections=${recipeDirections}&imgSrc=${imgSrc}&imgAlt=${imgAlt}&servingSize=${servingSize}&cookTime=${cookTime}&userName=${userName}&userID=${userID}`;

    console.log(url);

    axios
      .get(url)
      .then(function (response) {
        console.log({ response });
        navigate("/", { replace: true });
      })
      .catch(function (error) {
        console.warn(error);
      });
  }
  return (
    <div className="PageWrapper">
      <AddPostForm SubmitPost={SubmitPost}></AddPostForm>
    </div>
  );
}

export default AddPost;
