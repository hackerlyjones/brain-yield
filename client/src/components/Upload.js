import React, {useRef} from "react";
import {Storage} from "aws-amplify";

const Upload = () => {
  const fileInputReference = useRef(null);

  const handleFileUpload = () => {
    let file = fileInputReference.current.files[0];
    Storage.put(file.name, file).then(response => {
      console.log("File upload: " + response);
    }).catch(error => console.log(error))
  }

  return (
    <div className="row justify-content-center">
      <div className="col-6">
        <input ref={fileInputReference} type="file" onChange={handleFileUpload} />
      </div>
    </div>
  )
}

export default Upload;
