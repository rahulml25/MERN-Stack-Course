import React from "react";

export default function Card() {
  return (
    <div className="cursor-pointer rounded-lg bg-blue-100/60 px-4 py-3 shadow-lg">
      <h3 className="mb-3 text-2xl font-medium">Card Heading</h3>

      <p className="italic">Card Description Here</p>
      <p className="line-clamp-2 text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum velit
        voluptates eum animi soluta modi officiis voluptatibus optio hic
        possimus odit laudantium nobis deserunt asperiores dolores, atque dicta,
        tempore dolorum.
      </p>
    </div>
  );
}
