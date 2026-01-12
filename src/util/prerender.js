const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

module.exports = {
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'),
        routes: ['/'], // 需要预渲染的路由
        renderer: new PrerenderSPAPlugin.PuppeteerRenderer({
          renderAfterDocumentEvent: 'render-event',
        }),
      }),
    ],
  },
};
