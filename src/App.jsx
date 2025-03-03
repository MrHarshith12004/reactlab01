import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('');

  return (
    <>
    <div className = "App">
      <input
      type = "text"
      placeholder = "Type Someting..."
      value = {text}
      onChange = {(e)=>setText(e.target.value)}
      />
      <h1><strong>You Typed:{text}</strong></h1>
      <h2>Number of characters : {text.length}</h2>
    </div>
    </>
  );
}

export default App;
