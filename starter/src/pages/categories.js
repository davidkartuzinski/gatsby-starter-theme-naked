import React from "react";
import PropTypes from "prop-types";
import kebabCase from "lodash/kebabCase";
import { Link } from "gatsby";
import SEO from "gatsby-theme-naked-core/src/components/core/seo";
import { CategoriesIcon } from "gatsby-theme-naked-core/src/components/core/icons.js";
import { useSiteMetadata } from "gatsby-theme-naked-core/src/hooks/use-site-metadata";
import { useAllMdx } from "gatsby-theme-naked-core/src/hooks/use-all-mdx";
import Layout from "gatsby-theme-naked-core/src/components/structure/layout";
import NakedBreadcrumb from "gatsby-theme-naked-core/src/components/core/breadcrumb";
import Aside from "gatsby-theme-naked-core/src/components/aside";

const CategoriesPage = ({ pageContext, location }) => {
  const { logo, title } = useSiteMetadata();
  const { categories } = useAllMdx();

  const {
    breadcrumb: { crumbs }
  } = pageContext;

  const customCrumbLabel = location.pathname.toLowerCase().replace("-", " ");

  return (
    <Layout pageClass={`categories-page`}>
      <SEO
        title={`${title} Categories`}
        canonical={"categories"}
        description={`The Categories Page for ${title}`}
        date={""}
        dateModified={""}
        image={logo}
        slug={"categories"}
        crumbs={crumbs}
      />

      <main className="page">
        <NakedBreadcrumb crumbs={crumbs} crumbLabel={customCrumbLabel} />
        <article>
          <header>
            <h1>
              <CategoriesIcon /> Categories
            </h1>
          </header>
          <ul>
            {categories.map(category => (
              <li key={category.fieldValue}>
                <Link to={`/categories/${kebabCase(category.fieldValue)}`}>
                  {category.fieldValue} ({category.totalCount})
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

CategoriesPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
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

export default CategoriesPage;
