import { useState, useEffect } from "react";

function App() {
  const [nome, setNome] = useState("");
  const [nomes, setNomes] = useState([]);

  useEffect(() => {
    fetch("https://testeverselmongodb.vercel.app")
      .then((res) => res.json())
      .then((data) => setNomes(data));
  }, []);

  const adicionarNome = () => {
    fetch("https://testeverselmongodb.vercel.app", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome }),
    })
      .then(() => setNomes([...nomes, { nome }]))
      .then(() => setNome(""));
  };

  return (
    <div>
      <h1>Salvar Nome</h1>
      <input 
        type="text" 
        value={nome} 
        onChange={(e) => setNome(e.target.value)} 
      />
      <button onClick={adicionarNome}>Salvar</button>
      <ul>
        {nomes.map((n, index) => (
          <li key={index}>{n.nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
