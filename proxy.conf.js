// README: check the cookie from request headers in browser and replace this.
/**
 * Copy cookie by opening Chrome 
 * and your SP SITE and 
 * then Go to Network Tab 
 * right click on any request 
 * and copy as CURL
 * You will see -H cookie "allyourcookies"
 * Copy that value here in this variable and restart angular server ng-serve
 */
const cookie = "<COOKIES>";
const target = "https://tenant.sharepoint.com";
const PROXY_CONFIG = {
    "/test/_layouts/*": {
        "target": target,
        "secure": false,
        "changeOrigin": true,
        "bypass": function (req, res, proxyOptions) {
            req.headers["origin"] = target;
            req.headers["cookie"] = cookie;
        }
    },
    "/test/_api/*": {
        "target": target,
        "secure": false,
        "changeOrigin": true,
        "bypass": function (req, res, proxyOptions) {
            req.headers["origin"] = target;
            req.headers["cookie"] = cookie;
        }
    },
    "/_api/*": {
        "target": target,
        "secure": false,
        "changeOrigin": true,
        "bypass": function (req, res, proxyOptions) {
            req.headers["origin"] = target;
            req.headers["cookie"] = cookie;
        }
    }
}

module.exports = PROXY_CONFIG;