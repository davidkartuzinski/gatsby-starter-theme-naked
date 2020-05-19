import React from "react";
import PropTypes from "prop-types";
import kebabCase from "lodash/kebabCase";
import { Link } from "gatsby";
import { TagsIcon } from "gatsby-theme-naked-core/src/components/core/icons.js";
import SEO from "gatsby-theme-naked-core/src/components/core/seo";
import Layout from "gatsby-theme-naked-core/src/components/structure/layout";
import { useSiteMetadata } from "gatsby-theme-naked-core/src/hooks/use-site-metadata";
import { useAllMdx } from "gatsby-theme-naked-core/src/hooks/use-all-mdx";
import NakedBreadcrumb from "gatsby-theme-naked-core/src/components/core/breadcrumb";
import Aside from "gatsby-theme-naked-core/src/components/aside";

const TagsPage = ({ pageContext, location }) => {
  const { logo, title } = useSiteMetadata();
  const { tags } = useAllMdx();

  const {
    breadcrumb: { crumbs }
  } = pageContext;

  const customCrumbLabel = location.pathname.toLowerCase().replace("-", " ");
  return (
    <Layout pageClass={`tags-page`}>
      <SEO
        title={`${title} Tags`}
        canonical={"tags"}
        description={`The Tags Page for ${title}`}
        date={""}
        dateModified={""}
        image={logo}
        slug={"tags"}
        crumbs={crumbs}
      />

      <main className="page">
        <NakedBreadcrumb crumbs={crumbs} crumbLabel={customCrumbLabel} />

        <article>
          <header>
            <h1>
              <TagsIcon />
              Tags
            </h1>
          </header>
          <ul>
            {tags.map(tag => (
              <li key={tag.fieldValue}>
                <Link to={`/tags/${kebabCase(tag.fieldValue)}`}>
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </li>
            ))}
          </ul>
        </article>
      </main>
      <Aside />
    </Layout>
  );
};

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired
        }).isRequired
      )
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired
      })
    })
  })
};

export default TagsPage;
