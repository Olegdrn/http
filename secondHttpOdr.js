const http = require("http");

// const path = require("path");
// const dirname = path.join(__dirname, 'files');

import { requestListener } from './requestListener.js'

const host = 'localhost';
const port = 8000;



const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
