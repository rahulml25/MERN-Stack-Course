// import React, { useEffect, useState } from "react";
import Timer from "./components/Timer";

// let id = null;

export default function App() {
  return <Timer />;

  //   const [count, setCount] = useState(0);
  //   const [message, setMessage] = useState("");
  //
  //   const increase = () => {
  //     setCount((count) => {
  //       if (count + 1 > 10) {
  //         setMessage("Maximum value reached.");
  //         return count;
  //       } else {
  //         setMessage("");
  //         return count + 1;
  //       }
  //     });
  //   };
  //
  //   const decrease = () => {
  //     setCount((count) => {
  //       if (count - 1 < 0) {
  //         setMessage("Minimum value reached.");
  //         return count;
  //       } else {
  //         setMessage("");
  //         return count - 1;
  //       }
  //     });
  //   };
  //
  //   const start = () => {
  //     id = setInterval(() => setCount((v) => ++v), 1000);
  //   };
  //   const stop = () => (clearInterval(id), (id = null));
  //
  //   useEffect(() => {
  //     start();
  //     return stop;
  //   }, []);
  //
  //   return (
  //     <main className="flex h-dvh items-center justify-center">
  //       <div className="flex flex-col items-center justify-center space-y-3">
  //         {/* <p className="text-3xl font-semibold">
  //           Count: <span className="text-green-600">{count}</span>
  //         </p> */}
  //         <p className="text-4xl font-semibold">
  //           Timer: <span className="text-green-600">{count}</span>
  //         </p>
  //
  //         <div>{!!message && <p>{message}</p>}</div>
  //
  //         <div className="space-x-4 select-none">
  //           <button
  //             onClick={start}
  //             className="cursor-pointer rounded-md bg-blue-500 px-5 py-1 font-medium text-white"
  //           >
  //             Start
  //           </button>
  //           <button
  //             onClick={stop}
  //             className="cursor-pointer rounded-md bg-blue-500 px-5 py-1 font-medium text-white"
  //           >
  //             Stop
  //           </button>
  //           <button
  //             onClick={() => setCount(0)}
  //             className="cursor-pointer rounded-md bg-blue-500 px-5 py-1 font-medium text-white"
  //           >
  //             Reset
  //           </button>
  //         </div>
  //
  //         {/* <div className="space-x-4 select-none">
  //           <button
  //             onClick={decrease}
  //             className="cursor-pointer rounded-md bg-blue-500 px-5 py-1 font-medium text-white"
  //           >
  //             Decrease
  //           </button>
  //           <button
  //             onClick={increase}
  //             className="cursor-pointer rounded-md bg-blue-500 px-5 py-1 font-medium text-white"
  //           >
  //             Increase
  //           </button>
  //           <button
  //             onClick={() => setCount(0)}
  //             className="cursor-pointer rounded-md bg-blue-500 px-5 py-1 font-medium text-white"
  //           >
  //             Reset
  //           </button>
  //         </div> */}
  //       </div>
  //     </main>
  //   );
}
