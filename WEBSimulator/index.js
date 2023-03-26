const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const q = url.parse(req.url, true);
  const pathName = q.pathname;
  
  let fileName;

  switch (pathName) {
    case "/":
      fileName = "home.html";
      break;
    case "/about":
      fileName = "about.html";
      break;
    case "/contact":
      fileName = "contact.html";
      break;
    case "/where":
      fileName = "where.html";
      break;
    default:
      fileName = "404.html";
      break;
  }

  console.log(pathName);

  fs.readFile(fileName, (err, data) => {
    try {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
      } catch (error) {
      res.writeHead(404, { "Content-Type": "text/html" });
      console.error(error);
      return res.end("404 Not Found");
      }
  });
}).listen(8080);
