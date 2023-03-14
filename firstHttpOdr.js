const http = require("http");
const path = require("path");
const fs = require("fs");
const host = 'localhost';
const port = 8000;
const dirname = path.join(__dirname, 'files');

// fs.readdir(dirname, (err, files) => {
//   files.forEach((item) => {
//     console.log(item)
//   })



const requestListener = (req, res) => {
  if (req.url === '/get') {
    res.writeHead(200);
    res.end(`Всего файлов ${fs.readdirSync(dirname)}`);
  } else if (req.url === '/post') {
    res.writeHead(200);
    res.end('success');
  } else if (req.url === '/delete') {
    res.writeHead(200);
    res.end('success');
  } else
    res.writeHead(405);
  res.end('HTTP method not allowed');
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});