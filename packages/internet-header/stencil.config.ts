import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import scss from 'rollup-plugin-scss';

export const config: Config = {
  namespace: 'swisspost-internet-header',
  globalStyle: 'src/styles.scss',
  buildEs5: 'prod',
  bundles: [
    {
      components: ['swisspost-internet-header'],
    },
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        {
          src: 'assets/config/test-configuration.json',
          dest: 'assets/config/test-configuration.json',
        },
      ],
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'docs-json',
      file: 'dist/docs.json',
    },
  ],
  plugins: [
    sass({
      outputStyle: 'compressed',
      includePaths: ['node_modules'],
    }),
  ],
  rollupPlugins: {
    before: [
      scss({
        output: false,
      }),
    ],
  },
  extras: {
    enableImportInjection: true,
  },
};
