"use client";

import { useAtomValue } from "jotai";
import { notesAtom } from "./note.atom";

export const NoteList = () => {
  const notes = useAtomValue(notesAtom);
  return (
    <div>
      <h1>My List :</h1>
      <p>
        {notes.map((item) => {
          return (
            <div key={item.noteFirst}>
              <p>Input 1 :{item.noteFirst}</p>
              <p>Input 2 :{item.noteSecond}</p>
            </div>
          );
        })}
      </p>
    </div>
  );
};
