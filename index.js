const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 8080;

const readFile = (path) => {
    try {
        if (path === '/') {
            return fs.readFileSync('index.html');
        };
        if (path === '/about') {
            return fs.readFileSync('about.html');
        };
        if (path === '/contact-me') {
            return fs.readFileSync('contact-me.html');
        };
        return fs.readFileSync('404.html');
    } catch (error) {
        console.error(error)
    }
}

const server = http.createServer((req, res) => {
    const path = req.url;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(readFile(path));
});


server.listen(port, hostname, () => console.log(`Server running at http://${hostname}:${port}/`));