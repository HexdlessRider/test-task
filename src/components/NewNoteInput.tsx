import React, { ChangeEvent } from "react";

interface NewNoteInputProps {
  addNote(note: string): void;
}

const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
  const [note, setNote] = React.useState("");

  const updateNote = (e: ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  const onAddNoteClick = () => {
    addNote(note);
    setNote("");
  };
  return (
    <div className="flex flex-col items-center justify-center space-y-4 mb-2">
      <h1 className="mt-1 text-5xl font-medium leading-tight">Add new note</h1>
      <div className="flex items-center gap-2 justify-center mb-2">
        <input
          onChange={updateNote}
          value={note}
          type="text"
          name="name"
          placeholder="Note"
          className="w-1/2 p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={onAddNoteClick}
        >
          Add Note
        </button>
      </div>
    </div>
  );
};

export default NewNoteInput;
