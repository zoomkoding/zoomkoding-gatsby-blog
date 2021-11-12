import React, { createRef, useEffect, useRef } from 'react';

const src = 'https://utteranc.es/client.js';
const branch = 'master';

function Utterances({ repo, path }) {
  const rootElm = createRef();
  const isUtterancesLoaded = useRef(false);

  useEffect(() => {
    if (!rootElm.current || isUtterancesLoaded.current) return;
    const storedIsDarkMode = localStorage.getItem('isDarkMode');

    const utterances = document.createElement('script');
    const utterancesConfig = {
      src,
      repo,
      branch,
      theme: JSON.parse(storedIsDarkMode) ? 'photon-dark' : 'github-light',
      label: 'comment',
      async: true,
      'issue-term': 'pathname',
      crossorigin: 'anonymous',
    };

    Object.keys(utterancesConfig).forEach((configKey) => {
      utterances.setAttribute(configKey, utterancesConfig[configKey]);
    });
    rootElm.current.appendChild(utterances);
    isUtterancesLoaded.current = true;
  }, [repo, rootElm, path]);

  return <div className="utterances" ref={rootElm} />;
}

export default Utterances;
