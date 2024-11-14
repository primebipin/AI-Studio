import React, { useState } from 'react';
import './App.css';
import TextForm from './component/TextForm';
import OutputText from './component/outputText.js';


function App() {
  const [text, setText] = useState(''); // Holds corrected text for OutputText

  return (
    <div className="App">
      <header className="header">
        <h1 className="heading">AskMe</h1>
      </header>
      <div className="container">
        <TextForm setText={setText} />  {/* Pass setText to update corrected text */}
        {/* <FormattedOutput text={text}/> */}
        <OutputText text={text} />       {/* Display corrected text in OutputText */}
      </div>
    </div>
  );
}

export default App;
