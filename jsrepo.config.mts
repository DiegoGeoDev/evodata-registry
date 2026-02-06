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
      blocks: 'src/app/shared/blocks',
      components: 'src/app/shared/components',
      utils: 'src/app/shared/utils',
      lib: 'src/app/shared',
    },
    items: [
      {
        name: 'accordion',
        type: 'components',
        files: [
          {
            path: 'src/app/shared/components/accordion',
          },
        ],
      },
      {
        name: 'alert',
        type: 'components',
        files: [
          {
            path: 'src/app/shared/components/alert',
          },
        ],
      },
      {
        name: 'button',
        type: 'components',
        files: [
          {
            path: 'src/app/shared/components/button',
          },
        ],
      },
      {
        name: 'icon',
        type: 'components',
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
        name: 'number',
        type: 'utils',
        add: 'when-needed',
        files: [
          {
            path: 'src/app/shared/utils/number.ts',
          },
        ],
      },
      {
        name: 'zard-setup',
        type: 'lib',
        add: 'optionally-on-init',
        files: [
          {
            path: 'src/app/shared/core/directives/string-template-outlet/string-template-outlet.directive.ts',
          },
          {
            path: 'src/app/shared/core/directives/id.directive.ts',
          },
          {
            path: 'src/app/shared/core/provider/event-manager-plugins/zard-debounce-event-manager-plugin.ts',
          },
          {
            path: 'src/app/shared/core/provider/event-manager-plugins/zard-event-manager-plugin.ts',
          },
          {
            path: 'src/app/shared/core/provider/providezard.ts',
          },
          {
            path: 'src/app/shared/core/index.ts',
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
