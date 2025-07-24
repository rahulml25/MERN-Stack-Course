import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useNote, useNotesActions } from "../store/notesStore";

import NoteEditor from "../components/note-editor";
import MainAppContainer from "../containers/main-app-container";
import NotFoundPage from "./not-found-page";

type Props = {};

export default function EditNotePage({}: Props) {
  const navigate = useNavigate();
  const { updateNote, loadNotes } = useNotesActions();

  useEffect(() => {
    loadNotes();
  }, []);

  const { id } = useParams();
  if (!id) return <NotFoundPage />;

  const note = useNote(id);
  if (!note) return <NotFoundPage />;

  const onSave = (note: Note) => {
    updateNote(note);
    setTimeout(() => navigate("/notes"), 300);
  };

  return (
    <MainAppContainer className="grid items-center justify-center">
      <NoteEditor title="Update Note" onSave={onSave} note={note} />
    </MainAppContainer>
  );
}
