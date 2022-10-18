import React, { useEffect } from 'react';
import { DocsContainer } from '@storybook/addon-docs';
import { themes } from '@storybook/theming';
import { useDarkMode } from 'storybook-dark-mode';

import '../src/styles/global.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    current: 'light',
    dark: { ...themes.dark },
    light: { ...themes.normal }
  },
  docs: {
		container: props => {
			const isDark = useDarkMode();

  		const { id: storyId, storyById } = props.context;
      const {
        parameters: { docs = {} },
      } = storyById(storyId);
      
      docs.theme = isDark ? themes.dark : themes.light;

      return <DocsContainer {...props} />;
		},
	},
}

export const decorators = [renderStory => {
  const isDark = useDarkMode();

  useEffect(() => {
    const theme = isDark ? 'dark' : 'light';

    const html = document.querySelector('html');
    
    if (html) {
      html.classList.remove('dark', 'light');
      html.classList.add(theme);
    }
  }, [isDark]);

  return renderStory();
}];
