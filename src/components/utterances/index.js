import React, { useEffect } from 'react';

const src = 'https://utteranc.es/client.js';
const branch = 'master';

export const Utterances = ({ repo, theme, path }) => {
  const rootElm = React.createRef();

  useEffect(() => {
    if (!rootElm.current || rootElm.current.childNodes.length !== 0) return;
    const utterances = document.createElement('script');
    const utterancesConfig = {
      src,
      repo,
      branch,
      theme: theme === 'light' ? 'github-light' : 'photon-dark',
      label: 'comment',
      async: true,
      crossorigin: 'anonymous',
    };
    if (path === '/gatsby-github-blog/') utterancesConfig['issue-number'] = 14;
    else utterancesConfig['issue-term'] = 'pathname';

    Object.keys(utterancesConfig).forEach((configKey) => {
      utterances.setAttribute(configKey, utterancesConfig[configKey]);
    });
    rootElm.current.appendChild(utterances);
  }, [repo, rootElm, theme, path]);

  return <div className="utterances" ref={rootElm} />;
};
