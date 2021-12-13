import React, {useEffect, useState} from "react";
import {Storage} from "aws-amplify";
import {connect} from "react-redux";
import {useLocation} from "react-router-dom";
import queryString from "query-string";
import {membershipStatusSelector} from "../redux/selectors";

const NewsletterContent = ({status}) => {
  const hasNewsletter = status;
  const location = useLocation();
  const key = queryString.parse(location.search).key + ".md";
  console.log("Newsletter File: s3/" + key);

  const [copy, setCopy] = useState([]);

  // useEffect will only call once; inline will call every re-render tick
  useEffect(() => {
    Storage.get(key, {
        download: true,
        contentType: "application/text"
    }).then(result => {
      const copy = result.Body.text().then(copy => {
        console.log("Copy downloaded");
        console.log(copy);
        setCopy(copy);
      }).catch(error => console.log(error));
    }).catch(error => console.log(error));

  }, [])

  const newsletterContent = (
    <div>
      <div className="row justify-content-center">
        <div className="col-6">
          <p>This is the newsletter.</p>
        </div>
      </div>
    </div>
  );
  const unauthorizedContent = (
    <div>
      <div className="row justify-content-center">
        <div className="col-6">
          {copy}
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
