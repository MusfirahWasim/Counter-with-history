import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  const addHistory = (msg) => setHistory((h) => [...h, msg]);

  const increment = () => {
    setCount((c) => c + 1);
    addHistory(`Incremented to ${count + 1}`);
  };

  const decrement = () => {
    setCount((c) => c - 1);
    addHistory(`Decremented to ${count - 1}`);
  };

  const reset = () => {
    setCount(0);
    addHistory("Reset to 0");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-80">

        <h1 className="text-2xl font-bold text-center mb-4">
          Counter with History
        </h1>

        <div className="text-4xl font-semibold text-center mb-6">
          {count}
        </div>

        <div className="flex justify-center gap-3 mb-6">
          <button
            onClick={increment}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            +
          </button>
          <button
            onClick={decrement}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            -
          </button>
          <button
            onClick={reset}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
          >
            Reset
          </button>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">History</h2>
          {history.length === 0 ? (
            <p className="text-gray-400 text-sm text-center">No history yet</p>
          ) : (
            <ul className="border rounded-lg p-2 bg-gray-50">
              {history.map((item, index) => (
                <li
                  key={index}
                  className="text-center py-1 border-b last:border-none text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </div>
  );
}
