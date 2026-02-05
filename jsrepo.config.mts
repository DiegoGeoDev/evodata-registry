import { defineConfig } from 'jsrepo';
import { repository } from 'jsrepo/outputs';
import { fs } from 'jsrepo/providers';

export default defineConfig({
  providers: [fs()],
  registry: {
    name: 'evodata-registry',
    outputs: [repository()],
    excludeDeps: [
      '@angular/core',
      '@angular/common',
      '@angular/cdk',
      '@angular/forms',
      '@angular/router',
      '@angular/platform-browser',
    ],
    defaultPaths: {
      ui: 'src/app/shared/components',
      utils: 'src/app/shared/utils',
      core: 'src/app/shared/core',
    },
    items: [
      {
        name: 'button',
        type: 'ui',
        files: [
          {
            path: 'src/app/shared/components/button',
          },
        ],
      },
      {
        name: 'icon',
        type: 'ui',
        add: 'when-needed',
        files: [
          {
            path: 'src/app/shared/components/icon',
          },
        ],
      },
      {
        name: 'merge-classes',
        type: 'utils',
        add: 'when-needed',
        files: [
          {
            path: 'src/app/shared/utils/merge-classes.ts',
          },
        ],
      },
      {
        name: 'zard-setup',
        type: 'lib',
        add: 'optionally-on-init',
        files: [
          {
            path: 'src/app/shared/core',
          },
          {
            path: 'src/styles.css',
            role: 'doc',
          },
          {
            path: 'ZARD_SETUP.md',
            role: 'doc',
          },
        ],
      },
    ],
  },
  // configure where stuff comes from here
  registries: [],
  // configure were stuff goes here
  paths: {},
});
