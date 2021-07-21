import React, { useEffect } from 'react';

const src = 'https://utteranc.es/client.js';
const branch = 'master';

export const Utterances = ({ repo, theme }) => {
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
      'issue-term': 'pathname',
      crossorigin: 'anonymous',
    };

    Object.keys(utterancesConfig).forEach((configKey) => {
      utterances.setAttribute(configKey, utterancesConfig[configKey]);
    });
    rootElm.current.appendChild(utterances);
  }, [repo, rootElm, theme]);

  return <div className="utterances" ref={rootElm} />;
};
