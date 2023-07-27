import type { Preview } from '@storybook/web-components';

import DocsLayout from './blocks/layout';
import { format } from 'prettier';
import { badgesConfig, prettierOptions, resetComponents } from './helpers';
import './helpers/register-web-components';
import {
  extractArgTypesFactory,
  extractComponentDescription,
  setStencilDocJson,
} from '@pxtrn/storybook-addon-docs-stencil';
import { StencilJsonDocs } from '@pxtrn/storybook-addon-docs-stencil/dist/types';

import './styles/preview.scss';
import themes from './styles/themes';

import docJson from '@swisspost/design-system-components/dist/docs.json';

if (docJson) setStencilDocJson(docJson as StencilJsonDocs);

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          'Home',
          'Getting Started',
          ['Styles', 'Components'],
          'Foundations',
          ['Typography', 'Color', 'Layout', 'Elevation', 'Accessibility'],
          'Components',
          'Internet Header',
          ['Getting started', 'Migration Guide', 'Components', ['Header', 'Breadcrumbs', 'Footer']],
          'Intranet Header',
          ['Getting started'],
          'Icons',
          ['Getting started', 'Search Icons', 'Components'],
          'Templates',
          'Utilities',
          'Misc',
          ['Migration Guide', 'ChangeLog', 'Versions'],
          'Hidden',
        ],
      },
    },
    darkMode: {
      current: 'light',
      dark: themes.dark,
      light: themes.light,
      darkClass: 'bg-dark',
      lightClass: 'bg-white',
      stylePreview: true,
    },
    docs: {
      container: DocsLayout,
      source: {
        excludeDecorators: true,
        transform: (snippet: string) => format(snippet, prettierOptions),
      },
      components: resetComponents,
      extractArgTypes: extractArgTypesFactory({ dashCase: true }),
      extractComponentDescription,
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      hideNoControlsWarning: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    badgesConfig,
  },
};

export default preview;