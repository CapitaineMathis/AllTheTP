export default ["/etape3", (req, res) => {
    if (req.headers['content-type'] === 'application/json' && req.headers["authorization"] == "CACA"){
        res.writeHead(200, {"content-type": "application/json"});
        res.end(JSON.stringify({"hello": "world!"}))
    } else {
        res.writeHead(401);
        res.end()
    }
}];