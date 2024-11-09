import React from 'react';
import './App.css';
import TextForm from './component/TextForm';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="heading">AskMe</h1>
      </header>
      <div className="container">
        {/* Render TextForm component */}
        <TextForm />
        <TextForm/>
      </div>
    </div>
  );
}

export default App;
