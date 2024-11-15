import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import './outputText.css';

function OutputText({ text }) {
  const [copied, setCopied] = useState(false);
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    setDisplayText(text); // Sync displayText with text prop whenever it changes
  }, [text]);

  const handleCopy = () => {
    const markdownContent = document.querySelector('.markdown-content');
    if (markdownContent) {
      // Use the Clipboard API to copy the innerText (formatted content)
      navigator.clipboard.writeText(markdownContent.innerText)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch((err) => console.error('Failed to copy: ', err));
    }
  };

  const handleClear = () => {
    setDisplayText(''); // Clear the state to remove the displayed content
  };

  return (
    <div className="text-Box" role="textbox" aria-readonly="true">
      <div className="markdown-content">
        {text ? (
          <ReactMarkdown>{displayText}</ReactMarkdown>
        ) : (
          <span className="placeholder">See the output here...</span>
        )}
      </div>
      <button className={`button copy-button ${copied ? 'copied' : ''}`} onClick={handleCopy}>{copied ? 'Copied!' : 'Copy'}</button>
      <button className="button clear-button" onClick={handleClear}>Clear</button>
    </div>
  );
}

export default OutputText;