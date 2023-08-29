import React, { createRef, useEffect, useRef } from 'react';
import { getValueFromLocalStorage } from '../../utils/localStorage';

const url = 'https://utteranc.es';
const branch = 'master';

const getTheme = () => getValueFromLocalStorage('isDarkMode') ? 'photon-dark' : 'github-light'

const resetChangeListener = () => {
  const utterances = document.querySelector('iframe')?.contentWindow;
  utterances?.postMessage({
    type: 'set-theme',
    theme: getTheme()
  }, url);
}

function Utterances({ repo, path }) {
  const rootElm = createRef();
  const isUtterancesLoaded = useRef(false);

  useEffect(() => {
    if (!rootElm.current || isUtterancesLoaded.current) return;

    const utterances = document.createElement('script');
    const utterancesConfig = {
      src: `${url}/client.js`,
      repo,
      branch,
      theme: getTheme(),
      label: 'comment',
      async: true,
      'issue-term': 'pathname',
      crossorigin: 'anonymous',
    };

    Object.keys(utterancesConfig).forEach((configKey) => {
      utterances.setAttribute(configKey, utterancesConfig[configKey]);
    });
    rootElm.current.appendChild(utterances);
    window.addEventListener('theme', resetChangeListener)
    isUtterancesLoaded.current = true;
  }, [repo, rootElm, path]);

  return <div className="utterances" ref={rootElm} />;
}

export default Utterances;
