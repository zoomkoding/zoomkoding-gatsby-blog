import React, { useCallback } from 'react';
import { IconButton, Tooltip } from '@material-ui/core';

import EmailIcon from '@material-ui/icons/Email';
import DescriptionIcon from '@material-ui/icons/Description';
import PlayIcon from '@material-ui/icons/PlayArrowOutlined';
import GitHubIcon from '@material-ui/icons/GitHub';
import AndroidIcon from '@material-ui/icons/Android';
import AppleIcon from '@material-ui/icons/Apple';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import './style.scss';

const IconButtonBar = ({ links = {} }) => {
  const IconPicker = useCallback((icon) => {
    const props = { className: 'icon' };
    switch (icon) {
      case 'post':
        return <DescriptionIcon {...props} />;
      case 'demo':
        return <PlayIcon {...props} />;
      case 'github':
        return <GitHubIcon {...props} />;
      case 'googlePlay':
        return <AndroidIcon {...props} />;
      case 'appStore':
        return <AppleIcon {...props} />;
      case 'email':
        return <EmailIcon {...props} />;
      case 'linkedIn':
        return <LinkedInIcon {...props} />;
      default:
        return <></>;
    }
  }, []);

  return (
    <>
      {Object.keys(links).map((link, index) => {
        return (
          links[link] && (
            <Tooltip key={index} title={link} arrow className="icon-tooltip">
              <IconButton size="small" href={`${link === 'email' ? `mailto:` : ``}${links[link]}`}>
                {IconPicker(link)}
              </IconButton>
            </Tooltip>
          )
        );
      })}
    </>
  );
};

export default IconButtonBar;
