const { resolve } = require('path');
const config = require('@redhat-cloud-services/frontend-components-config');
const { defaultServices } = require('@redhat-cloud-services/frontend-components-config-utilities/standalone');
const commonPlugins = require('./plugins');

defaultServices.config.path = 'https://github.com/redallen/cloud-services-config#tmp/quickstarts';
const { config: webpackConfig, plugins } = config({
  rootFolder: resolve(__dirname, '..'),
  deployment: process.env.BETA ? 'beta/apps' : 'apps',
  appUrl: process.env.BETA ? '/beta/docs/cloud-tutorials' : '/docs/cloud-tutorials',
  standalone: defaultServices
});
plugins.push(...commonPlugins(webpackConfig));

module.exports = {
  ...webpackConfig,
  plugins,
};
