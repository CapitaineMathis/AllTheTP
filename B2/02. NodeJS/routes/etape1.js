export default ["/etape1", (req, res) => {
    res.writeHead(200, {"content-type": "text/plain"});
    res.end("hello ~~~~~~")
}];