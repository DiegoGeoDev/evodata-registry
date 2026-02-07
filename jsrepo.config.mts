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
      // BLOCKS
      {
        name: 'dark-mode-toggle',
        type: 'blocks',
        files: [
          {
            path: 'src/app/shared/blocks/dark-mode-toggle',
          },
          {
            path: 'src/app/shared/docs/ZARD_DARK_MODE_SETUP.md',
            role: 'doc',
          },
        ],
      },
      // COMPONENTS
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
        name: 'alert-dialog',
        type: 'components',
        files: [
          {
            path: 'src/app/shared/components/alert-dialog',
          },
        ],
      },
      {
        name: 'avatar',
        type: 'components',
        files: [
          {
            path: 'src/app/shared/components/avatar',
          },
        ],
      },
      {
        name: 'badge',
        type: 'components',
        files: [
          {
            path: 'src/app/shared/components/badge',
          },
        ],
      },
      {
        name: 'breadcrumb',
        type: 'components',
        files: [
          {
            path: 'src/app/shared/components/breadcrumb',
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
        name: 'button-group',
        type: 'components',
        files: [
          {
            path: 'src/app/shared/components/button-group',
          },
        ],
      },
      {
        name: 'calendar',
        type: 'components',
        files: [
          {
            path: 'src/app/shared/components/calendar',
          },
        ],
      },
      {
        name: 'card',
        type: 'components',
        files: [
          {
            path: 'src/app/shared/components/card',
          },
        ],
      },
      {
        name: 'carousel',
        type: 'components',
        files: [
          {
            path: 'src/app/shared/components/carousel',
          },
        ],
      },
      {
        name: 'checkbox',
        type: 'components',
        files: [
          {
            path: 'src/app/shared/components/checkbox',
          },
        ],
      },
      {
        name: 'combobox',
        type: 'components',
        files: [
          {
            path: 'src/app/shared/components/combobox',
          },
        ],
      },
      {
        name: 'command',
        type: 'components',
        files: [
          {
            path: 'src/app/shared/components/command',
          },
        ],
      },
      {
        name: 'date-picker',
        type: 'components',
        files: [
          {
            path: 'src/app/shared/components/date-picker',
          },
        ],
      },
      {
        name: 'dialog',
        type: 'components',
        files: [
          {
            path: 'src/app/shared/components/dialog',
          },
        ],
      },
      {
        name: 'divider',
        type: 'components',
        files: [
          {
            path: 'src/app/shared/components/divider',
          },
        ],
      },
      {
        name: 'dropdown',
        type: 'components',
        files: [
          {
            path: 'src/app/shared/components/dropdown',
          },
        ],
      },
      {
        name: 'empty',
        type: 'components',
        files: [
          {
            path: 'src/app/shared/components/empty',
          },
        ],
      },
      {
        name: 'form',
        type: 'components',
        files: [
          {
            path: 'src/app/shared/components/form',
          },
        ],
      },
      {
        name: 'icon',
        type: 'components',
        // add: 'when-needed',
        files: [
          {
            path: 'src/app/shared/components/icon',
          },
        ],
      },
      {
        name: 'input',
        type: 'components',
        files: [
          {
            path: 'src/app/shared/components/input',
          },
        ],
      },
      {
        name: 'input-group',
        type: 'components',
        files: [
          {
            path: 'src/app/shared/components/input-group',
          },
        ],
      },
      {
        name: 'kbd',
        type: 'components',
        files: [
          {
            path: 'src/app/shared/components/kbd',
          },
        ],
      },
      {
        name: 'layout',
        type: 'components',
        files: [
          {
            path: 'src/app/shared/components/layout',
          },
        ],
      },
      {
        name: 'loader',
        type: 'components',
        files: [
          {
            path: 'src/app/shared/components/loader',
          },
        ],
      },
      {
        name: 'menu',
        type: 'components',
        files: [
          {
            path: 'src/app/shared/components/menu',
          },
        ],
      },
      {
        name: 'pagination',
        type: 'components',
        files: [
          {
            path: 'src/app/shared/components/pagination',
          },
        ],
      },
      {
        name: 'popover',
        type: 'components',
        files: [
          {
            path: 'src/app/shared/components/popover',
          },
        ],
      },
      {
        name: 'progress-bar',
        type: 'components',
        files: [
          {
            path: 'src/app/shared/components/progress-bar',
          },
        ],
      },
      {
        name: 'select',
        type: 'components',
        files: [
          {
            path: 'src/app/shared/components/select',
          },
        ],
      },

      // UTILS
      {
        name: 'merge-classes',
        type: 'utils',
        files: [
          {
            path: 'src/app/shared/utils/merge-classes.ts',
          },
        ],
      },
      {
        name: 'number',
        type: 'utils',
        files: [
          {
            path: 'src/app/shared/utils/number.ts',
          },
        ],
      },

      // LIB
      {
        name: 'zard-setup',
        type: 'lib',
        // add: 'optionally-on-init',
        files: [
          {
            path: 'src/app/shared/core',
          },
          {
            path: 'src/styles.css',
            role: 'doc',
          },
          {
            path: 'src/app/shared/docs/ZARD_SETUP.md',
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
