import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { IconButton, Tooltip } from '@material-ui/core';

import DescriptionIcon from '@material-ui/icons/Description';
import PlayIcon from '@material-ui/icons/PlayArrowOutlined';
import GitHubIcon from '@material-ui/icons/GitHub';
import AndroidIcon from '@material-ui/icons/Android';
import AppleIcon from '@material-ui/icons/Apple';

const IconButtonBar = ({
  style = {
    fontSize: '20px',
    color: '#a8a8a8',
  },
  links = [],
}) => {
  const IconPicker = (icon) => {
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
    }
  };

  return (
    <>
      {Object.keys(links).map((link) => {
        return (
          links[link] && (
            <Tooltip title={link} arrow>
              <IconButton size="small" href={links[link]}>
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
