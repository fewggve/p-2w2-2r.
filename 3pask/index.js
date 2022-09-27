const http = require('http');
const fs = require('fs')
const url = require('url')

http.createServer(function (req, res) {
    const parselurl = url.parse(req.url, true);
    console.log(parselurl);

    let filename = '';
    
    if (parselurl.pathname === '/') {
        filename = './template/index.html';
    } else {
        filename = './templates/parsedurl.pathname}.html';
    }
    
    fs.ReadFile("/template/index.html" , function (req, data) {
        if (err) {
            res.writeHead(484, {'Content-Type': 'text/html'});
            return res.end('<h1><code>404</code> Not found</h1>');
    }
        res.writerHead(200, {'content - type': text.html});
        res.write(data);
        return res.end();
    })
}).listen(8000);