module.exports = {
  extends: [
    'tslint:all',
    'tslint-react',
    'tslint-eslint-rules',
  ],
  rules: {
    /**
     * TypeScript-specific rules
     */
    'only-arrow-functions': [
      true,
      'allow-named-functions',
    ],

    /**
     * Rules for Functionality
     */
    'no-implicit-dependencies': false,
    'no-submodule-imports': [
      true,
      '~src',
    ],
    'no-unsafe-any': false,

    /**
     * Rules for Maintainability
     */
    'object-literal-sort-keys': false,

    /**
     * Rules for Style
     */
    'arrow-return-shorthand': true,
    'comment-format': [
      true,
      {
        'ignore-pattern': 'tslint:disable[^:]*:.*$',
      },
    ],
    'file-name-casing': [
      true,
      'camel-case',
      'pascal-case',
    ],
    'interface-name': false,
    'newline-per-chained-call': false,
    'object-literal-key-quotes': [
      true,
      'as-needed',
    ],
    'ordered-imports': [
      true,
      {
        'import-sources-order': 'lowercase-last',
        'grouped-imports': true,
        'named-imports-order': 'lowercase-last',
        'module-source-path': 'full',
      }
    ],
    'prefer-function-over-method': [
      true,
      'allow-public',
    ],
    'quotemark': [
      true,
      'single',
      'jsx-single',
      'avoid-template',
    ],
    'variable-name': [
      true,
      'check-format',
      'allow-leading-underscore',
      'allow-pascal-case',
      'ban-keywords',
    ],
  },
};
