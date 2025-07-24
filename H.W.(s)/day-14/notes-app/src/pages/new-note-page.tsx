import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useNotesActions } from "../store/notesStore";

import NoteEditor from "../components/note-editor";
import MainAppContainer from "../containers/main-app-container";

export default function NewNotePage() {
  const navigate = useNavigate();
  const { addNote, loadNotes } = useNotesActions();

  const onSave = (note: Note) => {
    addNote(note);
    setTimeout(() => navigate("/notes"), 300);
  };

  useEffect(() => {
    loadNotes();
  }, []);

  return (
    <MainAppContainer className="grid items-center justify-center">
      <NoteEditor title="Create a new note" onSave={onSave} />
    </MainAppContainer>
  );
}
