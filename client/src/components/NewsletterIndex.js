import React, {useEffect, useState} from "react";
import {Storage} from "aws-amplify";
import {Link} from "react-router-dom";


const NewsletterIndex = () => {
  const [files, setFiles] = useState([]);

  const getArticleSlug = (file) => {
    const key = file.key;
    if (key.lastIndexOf(".") === -1) {
      return key;
    }
    return key.substring(0, key.lastIndexOf("."));
  }

  const getArticleName = (file) => {
    const key = file.key;
    const spacedKey = key[0] + key.slice(1, key.length).replace(/[A-Z]/g, letter => " " + letter);
    if (spacedKey.lastIndexOf(".") === -1) {
      return spacedKey;
    }
    return spacedKey.substring(0, spacedKey.lastIndexOf("."));
  }

  // useEffect will only call once; inline will call every re-render tick
  useEffect(() => {
    Storage.list('').then(files => {
      const fileKeys = files.map((file) => {
        const date = file.lastModified.getFullYear() + "/" + (file.lastModified.getMonth() + 1) + "/" + file.lastModified.getDate();
        return [getArticleSlug(file), getArticleName(file), date];
      })
      setFiles(fileKeys);
    }).catch(error => console.log(error))
  }, [])

  return (
    <div className="row justify-content-center">
      <table className="col-6" id="fileIndex">
        <tbody>
        {files.map((file) => (
          <tr key={file[0]} id={file[0]}>
            <td>
              <span>{file[2]}</span>&nbsp;&mdash;&nbsp;
              <Link to={"/newsletter/show/" + file[0]}>{file[1]}</Link>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default NewsletterIndex;
