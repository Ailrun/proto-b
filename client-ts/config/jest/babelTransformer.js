const babelConfig = require('../babel/babelrc');

module.exports = require('babel-jest').createTransformer(babelConfig);
