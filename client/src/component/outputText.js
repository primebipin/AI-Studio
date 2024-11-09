import React from 'react';
import './outputText.css';

function OutputText({ text }) {
  return (
    <div>
      <textarea
        className="text-Box"
        value={text}
        readOnly
        placeholder="See the output here..."
      ></textarea>
    </div>
  );
}

export default OutputText;
