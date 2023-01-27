const {createProxyMiddleware} = require('http-proxy-middleware');


module.exports = function(app) {
  app.use(
    '/api/getalljobs',
    createProxyMiddleware({
      target: 'https://localhost:5000',
      changeOrigin: true
    })
  );
};