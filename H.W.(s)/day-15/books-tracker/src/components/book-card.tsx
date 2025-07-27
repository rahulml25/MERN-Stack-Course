import React from "react";

type Props = Book & {};

export default function BookCard({ id, title, author, status }: Props) {
  return (
    <div className="relative flex flex-col rounded-xl">
      <p
        className={[
          status === "to read" && "border-neutral-400 text-neutral-600",
          status === "reading" && "border-blue-400 text-blue-600",
          status === "finished" && "border-green-400 text-green-600",
          "-mb-1.5 rounded-t-xl border border-b-0 bg-neutral-50 px-3 pt-0.5 pb-2 text-sm font-medium inset-shadow-xs",
        ].join(" ")}
      >
        {status}
      </p>

      <div
        className={[
          status === "to read" && "border-neutral-300",
          status === "reading" && "border-blue-300",
          status === "finished" && "border-green-300",
          "relative flex grow flex-col justify-between rounded-xl rounded-t-xl border-t bg-white px-5 py-4 shadow-lg transition-[scale] hover:scale-[1.02]",
        ].join(" ")}
      >
        <a
          href={`/view/${id}`}
          className="absolute inset-0 cursor-pointer opacity-0"
        >
          {title}
        </a>
        <h3 className="mb-1 line-clamp-2 text-2xl font-semibold">{title}</h3>
        <p className="line-clamp-1 text-right text-neutral-600">
          — by <span className="italic">{author}</span>
        </p>
      </div>
    </div>
  );
}
