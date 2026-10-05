const http = require('http');
const URL = require('url');
const querystring = require('querystring')
const fs = require('fs')


class routeList {
    // Route array of [path] = callback
    static routes = {}
    
    /**
     * Define a route.
     *
     * @static
     * @param {string} path - The URL pathname.
     * @param {Function} callback - The handler invoked when the path matches. 
     */
    static add(path, callback){
        this.routes[path] = callback;
    }
    
    /**
     * Dispatches an incoming HTTP request to the matched route handler.
     * Sends a 404 response if no matching route is found.
     *
     * @static
     * @param {import('http').IncomingMessage} req - The incoming HTTP request.
     * @param {import('http').ServerResponse} res - The outgoing HTTP response.
     */
    static request(req, res){
        // Extract the pathname from the request URL
        const url = URL.parse(req.url);
        const page = url.pathname;
        const handler = routeList.routes[page];
        // Return a 404 if no route exist
        if (!handler){
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
            return;
        }
        // Execute the registered route handler
        handler(req, res);
    }
}

// Get and initialize all routes.
fs.readdir("./routes/", (err, files) => {
    files.forEach(file => {
        if (file.startsWith("._")) return;
        routeList.add(...require("./routes/"+file).default)
    });
});

// Start the server and redirect to the right route.
const server = http.createServer(routeList.request)
server.listen(8085);


