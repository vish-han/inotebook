import React from "react";
import Notes from "../components/Notes";
import AddNote from "./AddNote";
const Home = () => {
  return (
    <>
      <AddNote />
      <Notes></Notes>
    </>
  );
};

export default Home;
