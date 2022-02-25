import noteContext from "./NoteContext";
import { useState } from "react";
const NoteState = (props) => {
  const s1 = {
    name: "vishal",
    age: "18",
  };
  const [state, setState] = useState(s1);
  const update = () => {
    setTimeout(() => {
      setState({ name: "gaurav", age: "20" });
    }, 2000);
  };
  return (
    <noteContext.Provider value={{ state, update }}>
      {props.children}
    </noteContext.Provider>
  );
};
export default NoteState;
