import noteContext from "./NoteContext";
import { useState } from "react";
const NoteState = (props) => {
  const noteInital = [
    {
      _id: "620b683d1f647c6b7fbb5402",
      user: "620a115e3b82db8b934391d6",
      title: "work",
      description: "this is the work that i wull do",
      tag: "todo",
      date: "2022-02-15T08:45:49.720Z",
      __v: 0,
    },
    {
      _id: "620b6a301f647c6b7fbb5405",
      user: "620a115e3b82db8b934391d6",
      title: "game",
      description: "game khlna hai",
      tag: "entertainment",
      date: "2022-02-15T08:54:08.479Z",
      __v: 0,
    },
    {
      _id: "620be2f47aa742dbdd7daf66",
      user: "620a115e3b82db8b934391d6",
      title: "game2",
      description: "game khlna hai2",
      tag: "entertainment",
      date: "2022-02-15T17:29:24.607Z",
      __v: 0,
    },
    {
      _id: "620be354c3aa5ca960fc225c",
      user: "620a115e3b82db8b934391d6",
      title: "game2",
      description: "game khlna hai2",
      tag: "entertainment",
      date: "2022-02-15T17:31:00.274Z",
      __v: 0,
    },
    {
      _id: "6216a41b29ea870321a5942a",
      user: "620a115e3b82db8b934391d6",
      title: "game2",
      description: "game khlna hai2",
      tag: "entertainment",
      date: "2022-02-23T21:16:11.105Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(noteInital);
  return (
    <noteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </noteContext.Provider>
  );
};
export default NoteState;
