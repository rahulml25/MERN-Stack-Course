import React from "react";

type Props = {
  title: string;
  note?: Note;
  onSave(note: Note): void;
};

export default function NoteEditor({ title, note, onSave }: Props) {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const _note: Note = {
      id: note?.id || crypto.randomUUID(),
      title: formData.get("title")!.toString(),
      content: formData.get("content")!.toString(),
    };

    onSave(_note);
  };

  return (
    <div className="my-8 w-md rounded-2xl bg-white px-12 py-10 shadow-xl">
      <h1 className="mb-5 text-center text-3xl font-semibold">{title}</h1>

      <form onSubmit={onSubmit} className="grid gap-9">
        <div className="grid gap-4">
          <div className="grid space-y-1">
            <label
              htmlFor="title"
              className="bg-white px-1 font-medium text-blue-500"
            >
              Title
            </label>
            <input
              id="title"
              name="title"
              placeholder="e.g. Science Project Details"
              className="rounded-md border px-3 py-1 text-lg outline-none"
              minLength={3}
              required
              defaultValue={note?.title}
            />
          </div>
          <div className="grid space-y-1">
            <label
              htmlFor="content"
              className="bg-white px-1 font-medium text-blue-500"
            >
              Content
            </label>
            <textarea
              id="content"
              name="content"
              placeholder="Note content"
              className="resize-none rounded-md border px-3 py-2 outline-none"
              minLength={3}
              rows={8}
              required
              defaultValue={note?.content}
            />
          </div>
        </div>

        <button className="cursor-pointer rounded-lg bg-blue-600 px-5 py-1 text-lg font-semibold text-white">
          Save
        </button>
      </form>
    </div>
  );
}
