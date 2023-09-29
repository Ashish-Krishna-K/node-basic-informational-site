import express from "express";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

// __dirname and __file doesn't work in ES6 modules  
// hence below hack to get the __dirname and __filename 
// variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// we're doing the path.join(__dirname, path-to-file) because
// the res.sendFile expects an absolute path to the file to be
// sent and just putting "home/...." would only work on the 
// local device(atleast that's how I understand it.)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/about.html"));
});

app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/contact-me.html"));
});

// sending 404 page for all other routes
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "/public/404.html"));
});

app.listen(8000);
