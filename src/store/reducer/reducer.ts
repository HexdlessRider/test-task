import { NoteAction } from "../actions/noteAction";
import { SelectAction } from "../actions/selectOption";

export interface State {
  notes: string[];
  selectedOption: string;

}

const initialState = {
  notes: [],
  selectedOption: ''
};

export const reducer = (
  state: State = initialState,
  action: SelectAction | NoteAction 
) => {
  switch (action.type) {
    case "ADD_NOTE":
      return { ...state, notes: [...state.notes, action.payload] };
    case "SELECT_OPTION":
      return { ...state,  selectedOption: action.payload};
    default:
      return state;
  }
};
