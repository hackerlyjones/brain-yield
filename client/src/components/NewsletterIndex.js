import React, {useEffect, useState} from "react";
import {Storage} from "aws-amplify";

const NewsletterIndex = () => {
  const [files, setFiles] = useState([]);

  // useEffect will only call once; inline will call every re-render tick
  useEffect(() => {
    Storage.list('').then(files => {
      console.log("Files downloaded");
      console.log(files);
      setFiles(files);
    }).catch(error => console.log(error))
  }, [])

  return (
    <div className="row justify-content-center">
      <table className="col-6">
        <thead>
        <tr>
          <td>Entry</td>
          <td>Title</td>
        </tr>
        </thead>
        <tbody>
        {files.map((file, index) => (
          <tr key={file.key}>
            <td>{index}</td>
            <td>{file.key}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default NewsletterIndex;
