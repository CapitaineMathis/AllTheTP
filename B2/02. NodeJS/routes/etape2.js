export default ["/etape2", (req, res) => {
    // --header 'Content-Type: application/json'
    if (req.headers['content-type'] === 'application/json'){
        res.writeHead(200, {"content-type": "text/plain"});
        res.end("YAY")
    } else {
        res.writeHead(200, {"content-type": "text/plain"});
        res.end("hello ~~~~~~")
    }
}];