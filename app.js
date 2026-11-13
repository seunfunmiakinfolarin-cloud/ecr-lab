const http = require('http');

http.createServer((req, res) => {
  res.end('Hello from ECR');
}).listen(3000);