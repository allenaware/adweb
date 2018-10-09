const path = require('path');
const isDev = think.env === 'development';

module.exports = [
  {
    handle:'header',
    options:{},

  },

  {
    handle: 'meta',
    options: {
      logRequest: isDev,
      sendResponseTime: isDev,
      sendPowerBy:false
    }
  },
  {
    handle: 'resource',
    enable: isDev,
    options: {
      root: path.join(think.ROOT_PATH, 'www'),
      publicPath: /^\/(static|favicon\.ico)/
    }
  },
  {
    handle: 'trace',
    enable: !think.isCli,
    options: {
      debug: isDev
    }
  },
  {
    handle: 'payload',
    options: {
      keepExtensions: true,
      limit: '5mb'
    }
  },
  {
    handle: 'router',
    options: {}
  },
  'logic',
  'controller',
];
