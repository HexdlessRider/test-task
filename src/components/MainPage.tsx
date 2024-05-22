import { addNote } from "../store/actions/noteAction";
import { State } from "../store/reducer/reducer";
import NewNoteInput from "./NewNoteInput";
import { useSelector, useDispatch } from "react-redux";
import RadioButtons from "./RadioButtons";
import DiscountCodeEntry from "./DiscountCodeEntry";
import DiscountCodeGenerator from "./GenerateNewCode";

const MainPages: React.FC = () => {
  const notes = useSelector<State, State["notes"]>((state) => state.notes);
  const dispatch = useDispatch();

  const onAddNote = (note: string) => {
    dispatch(addNote(note));
  };

  return (
    <div className="App">
      <RadioButtons />
      <DiscountCodeEntry />
      <DiscountCodeGenerator />
      <NewNoteInput addNote={onAddNote} />
      <hr />
      <ol className="mt-2">
        {notes.map((note: string) => {
          return <li key={note}>{note}</li>;
        })}
      </ol>
    </div>
  );
};

export default MainPages;
