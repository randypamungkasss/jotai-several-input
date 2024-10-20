import { NoteCreate } from "@/components/note.create";
import { NoteList } from "@/components/note.list";

export default function App() {
  return (
    <div>
      <NoteCreate />
      <NoteList />
    </div>
  );
}
