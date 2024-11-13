import ReactMarkdown from 'react-markdown';

function FormattedOutput({ text }) {
   return (
     <div className="text-Box">
       <ReactMarkdown>{text}</ReactMarkdown>
     </div>
   );
 }
 
 export default FormattedOutput;