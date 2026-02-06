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
        add: 'when-needed',
        files: [
          {
            path: 'src/app/shared/components/icon',
          },
        ],
      },
      {
        name: 'input',
        type: 'components',
        add: 'when-needed',
        files: [
          {
            path: 'src/app/shared/components/input',
          },
        ],
      },
      {
        name: 'input-group',
        type: 'components',
        add: 'when-needed',
        files: [
          {
            path: 'src/app/shared/components/input-group',
          },
        ],
      },
      {
        name: 'kdb',
        type: 'components',
        add: 'when-needed',
        files: [
          {
            path: 'src/app/shared/components/kdb',
          },
        ],
      },
      {
        name: 'layout',
        type: 'components',
        add: 'when-needed',
        files: [
          {
            path: 'src/app/shared/components/layout',
          },
        ],
      },
      {
        name: 'loader',
        type: 'components',
        add: 'when-needed',
        files: [
          {
            path: 'src/app/shared/components/loader',
          },
        ],
      },
      {
        name: 'menu',
        type: 'components',
        add: 'when-needed',
        files: [
          {
            path: 'src/app/shared/components/menu',
          },
        ],
      },
      {
        name: 'popover',
        type: 'components',
        add: 'when-needed',
        files: [
          {
            path: 'src/app/shared/components/popover',
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
