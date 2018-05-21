'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
    ace: {
      modes: ['handlebars'],
      themes: ['monokai'],
      useSoftTabs: true,
      tabSize: 2,
      useWrapMode: false,
    },

    // Add options here
    'ember-froala-editor': {
      plugins: [
        'lists',
        'link',
        'image',
        'align',
        'embedly',
        'emoticons',
        'fullscreen',
        'image',
        'link',
        'video',
        'print',
        'quote',
        'special_characters',
        'paragraph_format',
        'help',

        // Not in use right now.

        // 'font_family',
        // 'font_size',
        // 'inline_style',
        // 'file',
        // 'code_view',
        // 'paragraph_style',
      ],
    }
  });

  // Bootstrap JS and source maps.
  app.import('node_modules/bootstrap/dist/js/bootstrap.bundle.min.js');
  app.import('node_modules/bootstrap/dist/js/bootstrap.bundle.min.js.map', { destDir: 'assets' });

  // High Charts
  app.import('node_modules/highcharts/highcharts.js');
  app.import('node_modules/highcharts/modules/exporting.js');

  app.import('node_modules/fraction.js/fraction.min.js', {
    using: [
      { transformation: 'amd', as: 'fraction.js' }
    ]
  });

  app.import('node_modules/filesize/lib/filesize.js', {
    using: [
      { transformation: 'amd', as: 'filesize' }
    ]
  });

  return app.toTree();
};
