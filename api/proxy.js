// const request = require('request');

// module.exports = (req, res) => {
//     // proxy middleware options
//     let prefix = "/notion-api"
//     if (!req.url.startsWith(prefix)) {
//         return;
//     }
//     let target = "https://api.notion.com" + req.url.substring(prefix.length);
//     var options = req.options
//     options['target']=target
//     request(options, function (error, response) {
//         if (error) throw new Error(error);
//         res.writeHead(200, { "Content-Type": "application/json" });
//         res.write(response.body);
//         res.end();
//     });
// }
const { createProxyMiddleware } = require('http-proxy-middleware');

const apiProxy = createProxyMiddleware({
    target: "https://api.notion.com",
    changeOrigin: true,
    pathRewrite: {
        "^/notion-api": "" // strip "/api" from the URL
    },
    onProxyRes(proxyRes) {
        // proxyRes.headers['x-added'] = 'foobar'; // add new header to response
        proxyRes.headers['Notion-Version'] = res.headers['notion-version']; // add new header to response
        proxyRes.headers['Authorization'] = res.headers['authorization']; // add new header to response
        // delete proxyRes.headers['x-removed']; // remove header from response
    }
});

// Expose the proxy on the "/api/*" endpoint.
module.exports = (req, res) => {
    let prefix = "/notion-api"
    if (!req.url.startsWith(prefix)) {
        return;
    }
    return apiProxy(req, res);
};