import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Bio from '../components/bio';
import PostCards from '../components/post-cards';
import SectionHeader from '../components/section-header';

export default ({ data }) => {
  console.log(data.allMarkdownRemark.edges);
  return (
    <Layout>
      <SEO title="Home" />
      <Bio />
      <SectionHeader title="Featured Posts" />
      <PostCards contents={data.allMarkdownRemark.edges} />
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
