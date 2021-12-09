import React from "react";
import {connect} from "react-redux";
import {membershipStatusSelector} from "../redux/selectors";

const NewsletterContent = ({status}) => {
  const hasNewsletter = status;
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
          <p>You are not worthy.</p>
        </div>
      </div>
    </div>
  )

  return (
    <newslettercontent>
      {hasNewsletter ? newsletterContent : unauthorizedContent}
    </newslettercontent>
  )
}

function mapStateToProps(state) {
  return {
    status: membershipStatusSelector(state)
  }
}

export default connect(mapStateToProps)(NewsletterContent);
