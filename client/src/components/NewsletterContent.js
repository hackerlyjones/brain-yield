import React, {useEffect, useState} from "react";
import {Storage} from "aws-amplify";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import Markdown from "markdown-to-jsx";
import {membershipStatusSelector} from "../redux/selectors";

const NewsletterContent = ({status}) => {
  const hasNewsletter = status;
  const { key } = useParams();
  console.log(key);

  const [copy, setCopy] = useState("#### Loading…");

  // useEffect will only call once; inline will call every re-render tick
  useEffect(() => {
    Storage.get(key + ".md", {
      download: true,
      contentType: "application/text"
    }).then(result => {
      result.Body.text().then(copy => {
        console.log("Copy downloaded");
        console.log(copy);
        setCopy(copy);
      }).catch(error => console.log(error));
    }).catch(error => console.log(error));

  }, [key])

  const newsletterContent = (
    <div>
      <div className="row justify-content-center">
        <div className="col-6">
          <Markdown options={{wrapper: 'article'}}>
            {copy}
          </Markdown>
        </div>
      </div>
    </div>
  );
  const unauthorizedContent = (
    <div>
      <div className="row justify-content-center">
        <div className="col-6">
          <p>You are not worthy.</p>
        </div>
      </div>
    </div>
  )

  return hasNewsletter ? newsletterContent : unauthorizedContent;
}

function mapStateToProps(state) {
  return {
    status: membershipStatusSelector(state)
  }
}

export default connect(mapStateToProps)(NewsletterContent);
