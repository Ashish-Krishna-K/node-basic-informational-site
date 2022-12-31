const express = require('express');
const fs = require('fs');

const app = express();

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

app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`));

app.get('/about', (req, res) => res.sendFile(`${__dirname}/about.html`));

app.get('/contact', (req, res) => res.sendFile(`${__dirname}/contact-me.html`));

app.use((req, res, next) => res.status(404).sendFile(`${__dirname}/404.html`));

app.listen(port, () => console.log(`Server running at http://localhost:${port}/`));
