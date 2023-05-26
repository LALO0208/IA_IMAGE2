import { useState } from 'react'
import { Configuration, OpenAIApi } from 'openai'
import './App.css'


function App() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });

  const openai = new OpenAIApi(configuration);

  const generateImage = async () =>{
    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "512x512"
    });

    setResult(res.data.data[0].url);
  };
  return (
    <div className="app-main">
      <h1 class = "text">Generador de imágenes con IA</h1>
      <input 
      className="app-input" 
      placeholder='Ejemplo: Mona lisa sonriendo'
      onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={generateImage}>generar imagen</button>

      {result.length > 0 ? <img className="result-image" src={result} alt="result" /> : <></>}
      <footer>
        <div>
          <h2>Desarrollado por:</h2>
          <h2>Eduardo Narez</h2>
        </div>
      </footer>

    </div>
  )
}
export default App;
