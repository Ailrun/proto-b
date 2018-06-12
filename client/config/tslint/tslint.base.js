module.exports = {
  extends: [
    'tslint:all',
    'tslint-react',
    'tslint-eslint-rules',
  ],
  rules: {
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

    /**
     * Rules for Style
     */
    'comment-format': [
      true,
      {
        'ignore-pattern': 'tslint:disable[^:]*:.*$',
      },
    ],
    'interface-name': false,
    'newline-per-chained-call': false,
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
