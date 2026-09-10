const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  images: {
    domains: ['localhost', 'your-domain.com'],
    unoptimized: true,
  },
  compress: true,
  poweredByHeader: false,
};