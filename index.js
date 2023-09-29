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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLElBQUksTUFBTSxXQUFXLENBQUM7QUFDN0IsT0FBTyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTdCLE1BQU0sSUFBSSxHQUFHLFdBQVcsQ0FBQztBQUN6QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUM7QUFFbEIsa0VBQWtFO0FBQ2xFLGlFQUFpRTtBQUNqRSxrRUFBa0U7QUFDbEUsbUVBQW1FO0FBQ25FLG9FQUFvRTtBQUNwRSx5REFBeUQ7QUFDekQsTUFBTSxLQUFLLEdBQUcsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDdkQsTUFBTSxLQUFLLEdBQUcsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDdkQsTUFBTSxPQUFPLEdBQUcsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFDOUQsTUFBTSxRQUFRLEdBQUcsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFFeEQsb0JBQW9CO0FBQ3BCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUNsRCxxQ0FBcUM7SUFDckMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDM0MsZ0NBQWdDO0lBQ2hDLFFBQVEsR0FBRyxDQUFDLEdBQUcsRUFBRTtRQUNmLCtDQUErQztRQUMvQyxLQUFLLEdBQUc7WUFDTiw2QkFBNkI7WUFDN0IsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQixHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2YsTUFBTTtRQUNSLDZDQUE2QztRQUM3QyxLQUFLLFFBQVE7WUFDWCxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDZixNQUFNO1FBQ1Isb0RBQW9EO1FBQ3BELEtBQUssYUFBYTtZQUNoQixHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDakIsTUFBTTtRQUNSLHdEQUF3RDtRQUN4RCx5QkFBeUI7UUFDekI7WUFDRSw2QkFBNkI7WUFDN0IsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQixHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ3JCO0FBQ0gsQ0FBQyxDQUFDLENBQUM7QUFFSCxnQ0FBZ0M7QUFDaEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixJQUFJLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM3RCxDQUFDLENBQUMsQ0FBQyJ9