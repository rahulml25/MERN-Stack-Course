import NoteCard from "../components/note-card";
import MainAppContainer from "../containers/main-app-container";

export let notes = [];

export const loadNotes = () => {
  const notesVal = localStorage.getItem("notes");
  notes = JSON.parse(notesVal ?? "[]");
};

type Props = {};

export default function NotesPage({}: Props) {
  return (
    <MainAppContainer>
      <h1 className="mb-3 py-2 text-3xl font-semibold">Notes</h1>

      <div className="grid grid-cols-4 gap-4">
        {[...Array(10)].map((_, idx) => (
          <NoteCard key={idx} id="1" title="Title" content="Note content." />
        ))}
      </div>
    </MainAppContainer>
  );
}
