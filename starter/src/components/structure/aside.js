import React from "react";

import Instagram from "components/widgets/instagram";
// import MailChimpSignUp from "../widgets/mailchimp-sign-up"
// import LatestPosts from "../widgets/latest-posts"

// import Bio from "../widgets/bio"

const Aside = ({ children }) => {
  return (
    <>
      <aside className="page-aside">
        {children}
        boo
        {/* <MailChimpSignUp />
        <Bio />

        <LatestPosts /> */}
        <Instagram />
      </aside>
    </>
  );
};

export default Aside;
