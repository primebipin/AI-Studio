import React, { useState } from 'react';
import './textForm.css'

function TextForm() {
  const [text, setText] = useState('');   // State for the input text
  const [loading, setLoading] = useState(false);  // State for the loading status

  // Handle changes in the text area
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // Function to send the text to the server and get the corrected text
  const handleFormatText = async () => {
    setLoading(true);  // Set loading to true when the request is sent
    try {
      // const response = await axios.post('http://localhost:5000/api/format-text',{text: text});

      const response = await fetch('http://localhost:5000/api/format-text', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",  // Specify content type
        },
        body: JSON.stringify({ text: text }),
      });
      
      const data = await response.json();
      console.log("data is :: ", data);

      // Log the entire response to see the structure
      console.log('API Response:');

      // Access the corrected text from the response
      const corrected = data.correctedText;

      if (corrected) {
        setText(corrected);  // Update the text area with the corrected text
      } else {
        console.error('No corrected text returned');
        alert('No corrected text returned from the server.');
      }
    } catch (error) {
      console.error('Error communicating with server:::::', error.message);
      // alert('An error occurred while formatting the text.');
    } finally {
      setLoading(false);  // Reset loading state
    }
  };

  return (
    <div>
      <textarea
        className="textBox"
        value={text}
        onChange={handleOnChange}
        rows="8"
        placeholder="Type your text here..."
      ></textarea>

      {/* Button to trigger text correction */}
      <button
        className="btn btn-primary my-3"
        onClick={handleFormatText}
        disabled={loading}  // Disable button while loading
      >
        {loading ? 'Correcting...' : 'Correct Text'}
      </button>
    </div>
  );
}

export default TextForm;
