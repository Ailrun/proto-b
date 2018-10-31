const base = require('./tslint.base');

module.exports = {
  ...base,
  rules: {
    ...base.rules,

    /**
     * TypeScript-specific rules
     */
    'no-import-side-effect': [
      true,
      {
        'ignore-module': '\\.(html|css|scss|sass)$',
      }
    ],
    'no-magic-numbers': [
      true,
      0, 1, 2, 100,
    ],
    'typedef': [
      true,
      'property-declaration',
      'member-variable-declaration',
    ],

    /**
     * Rules for Maintainability
     */
    'max-line-length': [
      true,
      {
        'limit': 80,
        'ignore-pattern': '^.*`.*`',
      },
    ],

    /**
     * Rules for Style
     */
    'completed-docs': [
      true,
      {
        'classes': {
          'visibilities': ['all'],
          'tag': {
            'content': {
              'desc': ['.+'],
              'author': ['.+'],
            },
            'existence': ['desc', 'author'],
          },
        },
        'enum': {
          'visibilities': ['internal'],
          'tag': {
            'content': {
              'desc': ['.+'],
              'author': ['.+'],
            },
            'existence': ['desc', 'author'],
          },
        },
        'methods': {
          'privacies': ['protected'],
          'tag': {
            'content': {
              'desc': ['.+'],
              'author': ['.+'],
            },
            'existence': ['desc', 'author'],
          },
        },
        'namespaces': {
          'visibilities': ['all'],
          'tag': {
            'content': {
              'desc': ['.+'],
              'author': ['.+'],
            },
            'existence': ['desc', 'author'],
          },
        },
      },
    ],
  },
};
