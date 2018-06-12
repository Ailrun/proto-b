const base = require('./tslint.base');

module.exports = {
  ...base,
  rules: {
    ...base.rules,

    /**
     * TypeScript-specific rules
     */
    'typedef': [
      true,
      'property-declaration',
      'member-variable-declaration',
    ],

    /**
     * Rules for Style
     */
    'completed-docs': [
      true,
      'classes',
      'enums',
      'functions',
      'namespaces',
    ],
  },
};
