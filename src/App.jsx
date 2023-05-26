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
      <h2>Generador de imagenes con IA</h2>
      <input 
      className="app-input" 
      placeholder=''
      onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={generateImage}>genera una imagen</button>

      {result.length > 0 ? <img className="result-image" src={result} alt="result" /> : <></>}

    </div>
  )
}
export default App;
