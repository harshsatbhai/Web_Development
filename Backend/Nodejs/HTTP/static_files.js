const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
   
   let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
   let ext = path.extname(filePath);
   
   let contentType = 'text/html'; // default
   
   if(ext === '.css')
      contentType = 'text/css';
   else if(ext === '.js')
      contentType = 'text/javascript';
   
   //Read file and respond
   fs.readFile(filePath, (err, data) => {
      if (err) {
         res.writeHead(404, {'Content-Type': 'text/plain'});
         res.end('404 Not Found');
      }
      else {
         res.writeHead(200, {'Content-Type': contentType});
         res.end(data);   
      }
   });
});

server.listen(3000, () => {
   console.log('Server running at port 3000!');
});