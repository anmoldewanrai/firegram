import { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {

  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const fileTypes = ['image/jpeg', 'image/png'];

  const handleChange = (e) =>{
    let selectedFile = e.target.files[0];

    if(selectedFile && fileTypes.includes(selectedFile.type)){
      setFile(selectedFile);
      setError(null);
    } 
    else{
      setFile(null);
      setError("Please upload a correct image type (jpeg or png)");
    }
  }

  return ( 
    <form>
      <label>
        <input type="file" onChange={handleChange}/>
        <span>+</span>
      </label>
      <div className="output">
        { error && <div>{error}</div> }
        { file && <div>{file.name}</div> }
        { file && <ProgressBar file={file} setFile={setFile} /> }
      </div>
    </form>
   );
}
 
export default UploadForm;