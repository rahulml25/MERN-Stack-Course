import { useNavigate } from "react-router";
import { useNotesActions } from "../store/notesStore";

import NoteEditor from "../components/note-editor";
import MainAppContainer from "../containers/main-app-container";

export default function NewNotePage() {
  const navigate = useNavigate();
  const { addNote } = useNotesActions();

  const onSave = (note: Note) => {
    addNote(note);
    navigate("/notes");
  };

  return (
    <MainAppContainer>
      <NoteEditor title="Create a new note" onSave={onSave} />
    </MainAppContainer>
  );
}
