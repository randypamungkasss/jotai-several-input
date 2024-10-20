"use client";

import { useAtom } from "jotai";
import { useState } from "react";
import { notesAtom } from "./note.atom";

export const NoteCreate = () => {
  const [noteFirst, setNoteFirst] = useState("");
  const [noteSecond, setNoteSecond] = useState("");
  const [notes, setNotes] = useAtom(notesAtom);

  function handleAddNote() {
    const lists = { noteFirst, noteSecond };
    setNotes([...notes, lists]);
  }

  return (
    <div>
      <input onChange={(e) => setNoteFirst(e.target.value)} />
      <input onChange={(e) => setNoteSecond(e.target.value)} />
      <button onClick={handleAddNote}>Save</button>
    </div>
  );
};
