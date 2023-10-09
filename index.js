const http = require("http");
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.write("Hello, world!");
  res.end();
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Server running on localhost:${port}`);
});
