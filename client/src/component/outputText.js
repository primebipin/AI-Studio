import React from 'react';
import ReactMarkdown from 'react-markdown';
import './outputText.css';

function OutputText({ text }) {
  return (
    <div className="text-Box" role="textbox" aria-readonly="true">
      <div className="markdown-content">
        {text ? (
          <ReactMarkdown>{text}</ReactMarkdown>
        ) : (
          <span className="placeholder">See the output here...</span>
        )}
      </div>
      <button className="button copy-button">Copy</button>
      <button className="button clear-button">Clear</button>
    </div>
  );
}

export default OutputText;
