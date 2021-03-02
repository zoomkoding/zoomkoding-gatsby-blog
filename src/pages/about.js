import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Bio from '../components/bio';
import TimeStampsSection from '../components/timestamps-section';
import ProjectsSection from '../components/projects-section';

export default ({ data }) => {
  const metaData = data.site.siteMetadata;
  const { timestamps, projects } = metaData.about;
  return (
    <Layout>
      <SEO title="About" />
      <Bio />
      <TimeStampsSection timestamps={timestamps} />
      <ProjectsSection projects={projects} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        about {
          timestamps {
            date
            activity
            links {
              post
              github
              demo
              googlePlay
              appStore
            }
          }
          projects {
            title
            description
            techStack
            thumbnailUrl
            links {
              post
              github
              demo
              googlePlay
              appStore
            }
          }
        }
      }
    }
  }
`;
