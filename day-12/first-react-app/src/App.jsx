// import React, { useRef, useState } from "react";
// import Demo from "./components/demo";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Card from "./components/card";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Banner />

        <div className="px-6 py-10">
          <h2 className="mb-4 text-3xl font-medium">Cards</h2>

          <div className="grid grid-cols-4 gap-x-3 gap-y-5">
            {[...Array(3)].map(() => (
              <Card />
            ))}
          </div>
        </div>
      </main>

      <footer class="px-6 py-5">
        <p className="text-center text-neutral-600">
          &copy; 2005 - 2025 www.istock.com - All Rights Reserved.
        </p>
      </footer>
    </>
  );

  // return (
  //   <main className="container mx-auto">
  //     {/* <h1 className="text-center text-4xl font-semibold">Hello World!</h1> */}
  //     <Demo />
  //   </main>
  // );
  //
  // const nameRef = useRef(null);
  // const [name, setName] = useState("");
  //
  // return (
  //   <div className="space-y-2">
  //     <h1 className="text-3xl font-semibold">Hello World!</h1>
  //     <input
  //       type="text"
  //       ref={nameRef}
  //       className="border"
  //       onChange={(e) => setName(e.currentTarget.value)}
  //     />
  //
  //     {name && <p className="font-semibold">Hello {name}!</p>}
  //   </div>
  // );
}
