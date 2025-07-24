import NoteEditor from "../components/note-editor";
import MainAppContainer from "../containers/main-app-container";

type Props = {};

export default function EditNotePage({}: Props) {
  return (
    <MainAppContainer>
      EditNotePage <NoteEditor />
    </MainAppContainer>
  );
}
