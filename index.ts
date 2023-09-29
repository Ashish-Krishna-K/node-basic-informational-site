import http from "node:http";
import fs from "fs/promises";

const host = "localhost";
const port = 8000;

// read the html pages to be served immediately on server start up
// alternatively we can read these file when the request comes in
// doing it this way prevents reading the file on each request but
// comes with the tradeoff of having to restart the server whenever
// html files change, doing it the other way will make sure to serve
// fresh files but have to read the file for each request
const index = await fs.readFile("./public/index.html");
const about = await fs.readFile("./public/about.html");
const contact = await fs.readFile("./public/contact-me.html");
const notFound = await fs.readFile("./public/404.html");

// create the server
const server = http.createServer(async (req, res) => {
  // set the header to serve html files
  res.setHeader("Content-Type", "text/html");
  // read the requested route/path
  switch (req.url) {
    // no route mentioned serve the home/index page
    case "/":
      // set the status code to 200
      res.writeHead(200);
      res.end(index);
      break;
    // about route mentioned serve the about page
    case "/about":
      res.writeHead(200);
      res.end(about);
      break;
    // contact-me route mentioned serve the contact page
    case "/contact-me":
      res.writeHead(200);
      res.end(contact);
      break;
    // the provided route does not match any expected routes
    // serve a not found page
    default:
      // set the status code to 404
      res.writeHead(404);
      res.end(notFound);
  }
});

// start listening on the server
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
