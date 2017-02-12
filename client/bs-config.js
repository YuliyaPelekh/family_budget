var proxy = require('http-proxy-middleware');

var apiProxy = proxy('/api' , {
    target: 'http://localhost:8082',
    changeOrigin: true,
    pathRewrite:  {
                    '^/api/': '/'
                }

});

module.exports = {
    server: {
        middleware: {
            1: apiProxy
        }

    }
};