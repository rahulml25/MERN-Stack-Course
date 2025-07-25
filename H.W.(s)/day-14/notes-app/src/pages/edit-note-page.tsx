import { useNavigate, useParams } from "react-router";
import { useNote, useNotesActions } from "../store/notesStore";

import NoteEditor from "../components/note-editor";
import MainAppContainer from "../containers/main-app-container";
import NotFoundPage from "./not-found-page";

export default function EditNotePage() {
  const navigate = useNavigate();
  const { updateNote } = useNotesActions();

  const { id } = useParams();
  if (!id) return <NotFoundPage />;

  const note = useNote(id);
  if (!note) return <NotFoundPage />;

  const onSave = (note: Note) => {
    updateNote(note);
    navigate("/notes");
  };

  return (
    <MainAppContainer>
      <NoteEditor title="Update Note" onSave={onSave} note={note} />
    </MainAppContainer>
  );
}
