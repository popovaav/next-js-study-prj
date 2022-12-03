const withImages = require('next-images');
const { i18n } = require('./next-i18next.config');

module.exports = withImages({
  i18n,
  swcMinify: true
});
