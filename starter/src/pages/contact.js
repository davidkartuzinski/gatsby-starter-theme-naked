import React from "react";
import Layout from "gatsby-theme-naked-core/src/components/structure/layout";
import ContactForm from "gatsby-theme-naked-core/src/components/optional/contact-form";
import SEO from "gatsby-theme-naked-core/src/components/core/seo";
import { useSiteMetadata } from "gatsby-theme-naked-core/src/hooks/use-site-metadata";
import Aside from "gatsby-theme-naked-core/src/components/aside";

import NakedBreadcrumb from "gatsby-theme-naked-core/src/components/core/breadcrumb";

const Contact = ({ pageContext, location }) => {
  const { logo, title } = useSiteMetadata();
  const {
    breadcrumb: { crumbs }
  } = pageContext;

  const customCrumbLabel = location.pathname.toLowerCase().replace("-", " ");

  return (
    <Layout pageClass={`contact-page`}>
      <SEO
        title={`${title} Contact Page`}
        canonical={"contact"}
        description={`The Contact Page for ${title}`}
        date={""}
        dateModified={""}
        image={logo}
        slug={"contact"}
        crumbs={crumbs}
      />
      <main className="page">
        <NakedBreadcrumb crumbs={crumbs} crumbLabel={customCrumbLabel} />

        <article>
          <header>
            <h1>Contact Us</h1>
          </header>{" "}
          <ContactForm />
        </article>
      </main>
      <Aside></Aside>
    </Layout>
  );
};

export default Contact;
