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
    'typedef': false,

    /**
     * Rules for Functionality
     */
    'no-void-expression': false,
    'no-null-keyword': false,

    /**
     * Rules for Maintainability
     */
    'no-default-export': false,

    /**
     * Rules for Style
     */
    'completed-docs': false,
  },
};
