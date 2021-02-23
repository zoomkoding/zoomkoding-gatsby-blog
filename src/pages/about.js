import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Bio from '../components/bio';
import PostCards from '../components/post-cards';
import SectionHeader from '../components/section-header';

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="About" />
      <Bio />
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          html
          frontmatter {
            slug
            categories
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
