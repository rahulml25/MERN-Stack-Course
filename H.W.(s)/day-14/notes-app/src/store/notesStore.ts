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
      set({ notes: [...notes] });
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
      const idx = notes.findIndex((note) => note.id === updatedNote.id);
      const updatedNotes = notes.splice(idx, 1, updatedNote);
      actions.saveNotes(updatedNotes);
    },
    removeNote(noteId) {
      const { notes, actions } = getState();
      const idx = notes.findIndex((note) => note.id === noteId);
      const updatedNotes = notes.splice(idx, 1);
      actions.saveNotes(updatedNotes);
    },
  },
}));

export const useNotes = () => useNotesStore((state) => state.notes);
export const useNote = (id: string) =>
  useNotesStore((state) => state.notes.find((note) => note.id === id));
export const useNotesActions = () => useNotesStore((state) => state.actions);

/*
export let notes: Note[] = [];

const loadNotes = () => {
    const notesVal = localStorage.getItem("notes");
    notes = JSON.parse(notesVal ?? "[]");
};

const saveNotes = (updatedNotes: Note[]) => {
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    notes = updatedNotes;
};

export const getNote = (noteId: string) => {
    return notes.find((note) => note.id === noteId);
};

export const addNote = (newNote: Note) => {
    const updatedNotes = [...notes, newNote];
    saveNotes(updatedNotes);
};

export const updateNote = (updatedNote: Note) => {
    const idx = notes.findIndex((note) => note.id === updatedNote.id);
    const updatedNotes = notes.splice(idx, 1, updatedNote);
    saveNotes(updatedNotes);
};

export const removeNote = (noteId: string) => {
    const idx = notes.findIndex((note) => note.id === noteId);
    const updatedNotes = notes.splice(idx, 1);
    saveNotes(updatedNotes);
};

*/
