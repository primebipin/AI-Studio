import React, { useState } from 'react';
import './textForm.css';

function TextForm({ setText }) {
  const [inputText, setInputText] = useState('');
  const [correctLoading, setCorrectLoading] = useState(false);
  const [explainLoading, setExplainLoading] = useState(false);
  const [codeLoading, setCodeLoading] = useState(false);
  const [summaryLoading, setSummaryLoading] = useState(false);

  const handleOnChange = (event) => {
    setInputText(event.target.value);
  };

  // Function to handle the format text request based on button action
  const handleFormatText = async (action) => {
    // Set the appropriate loading state based on action
    const setLoading = (state) => {
      if (action === 'Correct Text') setCorrectLoading(state);
      if (action === 'Explain') setExplainLoading(state);
      if (action === 'Get Code') setCodeLoading(state);
      if (action === 'Get Summary') setSummaryLoading(state);
    };

    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/format-text', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: inputText, action }),
      });

      const data = await response.json();
      const generatedText = data.generatedText;

      if (generatedText) {
        setText(generatedText);
      } else {
        console.error('No text returned');
        alert('No text returned from the server.');
      }
    } catch (error) {
      console.error('Error:', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <textarea
        className="textBox"
        value={inputText}
        onChange={handleOnChange}
        rows="8"
        placeholder="Type your text here..."
      ></textarea>

      {/* Each button has its own loading state */}
      <button
        className="btn"
        onClick={() => handleFormatText('Correct Text')}
        disabled={correctLoading}
      >
        {correctLoading ? 'Correcting...' : 'Correct Text'}
      </button>

      <button
        className="btn"
        onClick={() => handleFormatText('Explain')}
        disabled={explainLoading}
      >
        {explainLoading ? 'Explaining...' : 'Explain'}
      </button>

      <button
        className="btn"
        onClick={() => handleFormatText('Get Code')}
        disabled={codeLoading}
      >
        {codeLoading ? 'Generating Code...' : 'Get Code'}
      </button>

      <button
        className="btn"
        onClick={() => handleFormatText('Get Summary')}
        disabled={summaryLoading}
      >
        {summaryLoading ? 'Summarizing...' : 'Get Summary'}
      </button>
    </div>
  );
}

export default TextForm;
