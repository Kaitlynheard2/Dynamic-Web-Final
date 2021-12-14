import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AddPostForm from "../components/AddPostForm";

const baseURL = `http://localhost:4000`;

function AddPost({ userInformation }) {
  const navigate = useNavigate();
  function SubmitPost(e) {
    e.preventDefault();
    const recipeName = e.currentTarget.recipeName;
    const ingredients = e.currentTarget.ingredients;
    const directions = e.currentTarget.directions;
    const imgURL = e.currentTarget.imgURL;
    const imgAlt = e.currentTarget.imgAlt;
    const servings = e.currentTarget.servings;
    const cooktime = e.currentTarget.cooktime;
    const userName = userInformation.displayName;
    const userID = userInformation.uid;

    const url = `${baseURL}/create?recipeName=${recipeName}&ingredients=${ingredients}&directions=${directions}&url=${imgURL}&alt=${imgAlt}&servings=${servings}&cooktime=${cooktime}&userName=${userName}&userID=${userID}`;

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
