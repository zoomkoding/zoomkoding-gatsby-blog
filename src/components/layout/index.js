/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import PageHeader from '../page-header';
import PageFooter from '../page-footer';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
          social {
            github
          }
        }
      }
    }
  `);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <PageHeader siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <PageFooter
        author={data.site.siteMetadata?.author || `Author`}
        githubUrl={data.site.siteMetadata?.social?.github || `https://www.github.com`}
      />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
