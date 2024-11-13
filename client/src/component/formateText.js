import ReactMarkdown from 'react-markdown';

function FormattedOutput({ text }) {
   return (
     <>
       <ReactMarkdown>{text}</ReactMarkdown>
     </>
   );
 }
 
 export default FormattedOutput;