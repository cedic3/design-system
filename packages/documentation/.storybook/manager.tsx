import { addons } from '@storybook/manager-api';
import themes from './styles/themes';
import renderLabel from './helpers/render-label';

if (process.env.NODE_ENV) document.documentElement.setAttribute('data-env', process.env.NODE_ENV);

addons.setConfig({
  panelPosition: 'right',
  theme: themes.light,
  sidebar: {
    collapsedRoots: [],
    renderLabel
  },
});
