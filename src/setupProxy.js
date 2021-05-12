const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  //realizar proxy inverso en el server
  //https://api.reniec.cloud/dni
  app.use(
    createProxyMiddleware("/reniec", {
      target: "https://dni.optimizeperu.com/api/persons",
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        "^/reniec": "",
      },
    })
  );
};
