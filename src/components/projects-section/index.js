import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import SectionHeader from '../section-header';
import IconButtonBar from '../icon-button-bar';

import './style.scss';

const ProjectsSection = ({ projects }) => {
  console.log(projects);
  return (
    <div className="projects-section-wrapper">
      <div className="projects-section">
        <SectionHeader title="Projects" />
        {projects.map((project) => {
          return (
            <div className="project">
              <div className="head">
                {project.title}&nbsp;&nbsp;
                {project.links && (
                  <IconButtonBar
                    links={project.links}
                    style={{
                      color: '#a8a8a8',
                      fontSize: '24px',
                    }}
                  />
                )}
              </div>
              <div className="body">
                <img className="thumbnail" src={project.thumbnailUrl} alt={project.title} />
                <div className="content">
                  {project.techStack && (
                    <div className="tech-stack">
                      {project.techStack.map((tech) => {
                        return <div className="tech">{tech}</div>;
                      })}
                    </div>
                  )}
                  <div className="description">{project.description}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsSection;
