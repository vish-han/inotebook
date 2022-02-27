import React from "react";

const NotesItem = (props) => {
  const { note } = props;
  return (
    <>
      <div className="col-md-3 my-2">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{note.title}</h5>
            <p class="card-text">{note.description}</p>
            <i class="fa-solid fa-trash-can mx-2"></i>
            <i class="fa-solid fa-trash-can mx-2"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotesItem;
