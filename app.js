const http = require('http');

const server = http.createServer( (req, res) => {
  console.log(req.url);
  res.writeHead(200, {"Content-type": "text/html"});
  let doc =`<html> <head> </head> <body> </body> <h1> test </h1> </body> </html>`
  res.end(doc);
})

server.listen(1234);

