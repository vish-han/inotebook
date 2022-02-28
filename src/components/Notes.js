import React, { useContext } from "react";
import noteContext from "../context/notes/NoteContext";
import NotesItem from "../components/NotesItem";
import AddNote from "../components/AddNote";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, setNotes } = context;
  return (
    <>
      <AddNote />
      <div className="row my-3">
        {notes.map((note) => {
          return <NotesItem note={note} />;
        })}
      </div>
    </>
  );
};

export default Notes;
