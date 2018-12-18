const http = require("http");
const fs = require("fs");
const parseURL = require("url");

const server = http.createServer((req, res) => {
  const { url, method } = req;

  if (url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/html");
    const html = fs.readFileSync("./index.html");
    res.write(html);
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", chunk => {
      console.log("chunk");
      body.push(chunk);
    });
    req.on("error", err => {
      console.log("Error: " + err.message);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      // fs.writeFileSync("message.txt", message);
      fs.writeFile("message.txt", message, err => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  //console.log(req, req.url, req.method, req.headers); // req Object , /test , GET , headerInfo
  // process.exit(); hard exists our event loop
  res.writeHead(200, { "Content-Type": "text/plain" });
  //   if (url !== "/") {
  //     //http://localhost:3000/?param1=Parameter1&param2=Parameter2
  //     var q = parseURL.parse(req.url, true).query;
  //     var txt = q.param1 + " " + q.param2;
  //     return res.end(txt);
  //   }

  res.write("Hello Node Server On");
  res.end();
});
server.listen(3000, () => {
  console.log("Server is running on 3000");
});

// node app.js
