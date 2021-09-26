/* global hexo */

'use strict';

hexo.extend.filter.register('before_generate', () => {
  // Merge config
  require('./lib/config')(hexo);
  // Set vendors
  require('./lib/vendors')(hexo);
  // Add filter type `theme_inject`
  require('./lib/injects')(hexo);
  // Highlight
  require('./lib/highlight')(hexo);
}, 0);

hexo.on('ready', () => {
  if (process.argv.includes('--next-disable-banner')) return;
  const { version } = require('../../package.json');
  hexo.log.info(`==================================
  ███╗   ██╗███████╗██╗  ██╗████████╗
  ████╗  ██║██╔════╝╚██╗██╔╝╚══██╔══╝
  ██╔██╗ ██║█████╗   ╚███╔╝    ██║
  ██║╚██╗██║██╔══╝   ██╔██╗    ██║
  ██║ ╚████║███████╗██╔╝ ██╗   ██║
  ╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝   ╚═╝ (MASHIRO edit)
========================================
NexT version ${version}
Documentation: https://theme-next.js.org
https://github.com/watatomo/next-mashiro
========================================`);
});
