import { create } from "zustand";

interface NotesStoreActions {
  loadNotes(): void;
  saveNotes(updatedNotes: Note[]): void;
  addNote(newNote: Note): void;
  updateNote(updatedNote: Note): void;
  removeNote(noteId: string): void;
}

interface NotesStoreState {
  notes: Note[];
  actions: NotesStoreActions;
}

export const useNotesStore = create<NotesStoreState>((set, getState) => ({
  notes: [],
  actions: {
    loadNotes() {
      const notes = JSON.parse(localStorage.getItem("notes") ?? "[]");
      set({ notes });
    },
    saveNotes(updatedNotes) {
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      set({ notes: [...updatedNotes] });
    },

    addNote(newNote) {
      const { notes, actions } = getState();
      const updatedNotes = [...notes, newNote];
      actions.saveNotes(updatedNotes);
    },
    updateNote(updatedNote) {
      const { notes, actions } = getState();
      const updatedNotes = notes.map((note) =>
        note.id === updatedNote.id ? updatedNote : note,
      );
      actions.saveNotes(updatedNotes);
    },
    removeNote(noteId) {
      const { notes, actions } = getState();
      const updatedNotes = notes.filter((note) => note.id !== noteId);
      actions.saveNotes(updatedNotes);
    },
  },
}));

export const useNotes = () => useNotesStore((state) => state.notes);
export const useNote = (id: string) =>
  useNotesStore((state) => state.notes.find((note) => note.id === id));
export const useNotesActions = () => useNotesStore((state) => state.actions);
