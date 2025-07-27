import React from "react";

type Props = {
  title: string;
  book?: Book;
  onSave(book: Book): void;
  onDelete?(): void;
};

export const bookStatusOptions = ["to read", "reading", "finished"] as const;

export default function BookEditor({ title, book, onSave, onDelete }: Props) {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      id: book?.id ?? crypto.randomUUID(),
      title: formData.get("title")!.toString(),
      author: formData.get("author")!.toString(),
      status: formData.get("status")!.toString() as BookStatus,
    };
    onSave(data);
  };

  return (
    <div className="mx-auto my-3 w-full max-w-sm rounded-2xl bg-white px-10 py-5 shadow-xl">
      <h1 className="mb-3 text-center text-2xl font-semibold">{title}</h1>

      <form onSubmit={onSubmit} className="grid gap-y-6">
        <div className="grid gap-y-4">
          <div className="grid gap-y-0.5">
            <label htmlFor="title" className="font-semibold text-neutral-700">
              Title
            </label>
            <input
              id="title"
              type="text"
              name="title"
              className="rounded-t-md border-b border-blue-800 bg-blue-50 px-4 py-1.5 outline-none"
              placeholder="e.g. Superman"
              defaultValue={book?.title}
            />
          </div>
          <div className="grid gap-y-0.5">
            <label htmlFor="author" className="font-semibold text-neutral-700">
              Author
            </label>
            <input
              id="author"
              type="text"
              name="author"
              className="rounded-t-md border-b border-blue-800 bg-blue-50 px-4 py-1.5 outline-none"
              placeholder="e.g. James Gunn"
              defaultValue={book?.author}
            />
          </div>
          <div className="grid gap-y-0.5">
            <label htmlFor="status" className="font-semibold text-neutral-700">
              Status
            </label>
            <select
              id="status"
              name="status"
              className="rounded-md bg-blue-50 px-4 py-1.5 outline-blue-400"
              defaultValue={book?.status}
            >
              {bookStatusOptions.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex space-x-3">
          {onDelete && (
            <button
              type="button"
              onClick={onDelete}
              className="grow cursor-pointer rounded-lg bg-red-500/80 px-4 py-1.5 font-medium text-white shadow transition-colors hover:bg-red-500/90"
            >
              Delete
            </button>
          )}
          <button
            type="submit"
            className="grow cursor-pointer rounded-lg bg-blue-500 px-4 py-1.5 font-medium text-white shadow transition-colors hover:bg-blue-500/90"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
