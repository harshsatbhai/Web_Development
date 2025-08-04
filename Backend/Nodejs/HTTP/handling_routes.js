const http = require('http');

const server = http.createServer((req, res) => {
   res.writeHead(200, {"Content-Type": "text/plain"});
   
   if (req.url === "/"){
      res.end("Welcome to Home Page");
   }
   else if (req.url === "/about"){
      res.end("Learning Node.js");
   }
   else {
      res.end("404 Page not found");
   }
});

server.listen(3000, () => {
   console.log("Server is running on port 3000!");
});