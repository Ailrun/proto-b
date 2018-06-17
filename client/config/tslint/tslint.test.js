const base = require('./tslint.base');

module.exports = {
  ...base,
  linterOptions: {
    exclude: [
      '../**/*',
      '../../src/**/*',
    ],
  },
  rules: {
    ...base.rules,

    /**
     * TypeScript-specific rules
     */
    'no-import-side-effect': false,
    'no-magic-numbers': false,
    'typedef': false,

    /**
     * Rules for Functionality
     */
    'no-null-keyword': false,
    'no-void-expression': false,

    /**
     * Rules for Maintainability
     */
    'max-line-length': false,
    'no-default-export': false,

    /**
     * Rules for Style
     */
    'completed-docs': false,
  },
};
