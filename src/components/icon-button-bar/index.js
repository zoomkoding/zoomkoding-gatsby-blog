import React, { useCallback } from 'react';
import { IconButton, Tooltip } from '@material-ui/core';

import EmailIcon from '@material-ui/icons/Email';
import DescriptionIcon from '@material-ui/icons/Description';
import PlayIcon from '@material-ui/icons/PlayArrowOutlined';
import GitHubIcon from '@material-ui/icons/GitHub';
import AndroidIcon from '@material-ui/icons/Android';
import AppleIcon from '@material-ui/icons/Apple';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const IconButtonBar = ({
  style = {
    fontSize: '20px',
    color: '#a8a8a8',
  },
  links = {},
}) => {
  const IconPicker = useCallback((icon) => {
    switch (icon) {
      case 'post':
        return <DescriptionIcon style={style} />;
      case 'demo':
        return <PlayIcon style={style} />;
      case 'github':
        return <GitHubIcon style={style} />;
      case 'googlePlay':
        return <AndroidIcon style={style} />;
      case 'appStore':
        return <AppleIcon style={style} />;
      case 'email':
        return <EmailIcon style={style} />;
      case 'linkedIn':
        return <LinkedInIcon style={style} />;
      default:
        return <></>;
    }
  }, []);

  return (
    <>
      {Object.keys(links).map((link, index) => {
        return (
          links[link] && (
            <Tooltip key={index} title={link} arrow>
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
