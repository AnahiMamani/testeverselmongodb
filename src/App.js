import { useState } from "react";

export default function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Projeto React Simples</h1>
            <p className="text-lg">Contador: {count}</p>
            <button
                onClick={() => setCount(count + 1)}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
                Incrementar
            </button>
        </div>
    );
}
