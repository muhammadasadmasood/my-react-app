import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <figure className="md:flex bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
          <div className="pt-6 text-center space-y-4">
            <blockquote>
              <p className="text-lg font-medium">
                “Tailwind CSS is the only framework that I've seen scale on
                large teams. It’s easy to customize, adapts to any design, and
                the build size is tiny.”
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">Asad Masood</div>
              <div className="text-slate-700 dark:text-slate-500">
                Staff Engineer, Gift University
              </div>
            </figcaption>
            <div>
              {<h1 className="p-5 text-5xl font-bold">{count}</h1>}
              <div className="flex justify-center">
                <button
                  className="bg-rose-500 text-white p-2 rounded mr-2"
                  onClick={() => setCount(count + 1)}
                >
                  Increment
                </button>
                <button
                  className="bg-rose-500 text-white p-2 rounded"
                  onClick={() => setCount(count - 1)}
                >
                  Decrement
                </button>
              </div>
            </div>
          </div>
        </figure>
      </div>
    </>
  );
}
