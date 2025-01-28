// const http = require("http");

//////////////////////////////////////// Express Way ///////////////////////////
const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("In the middleware");
  next();
});

app.use((req, res, next) => {
  console.log("In another middleware");
  res.send("<h1>Hello from Express</h1>");
});

// const server = http.createServer(app);
app.listen(3000)


//////////////////////////////////////////// Normal Node Way ///////////////////////////
// const requestHandler = require("./routes");

// const server = http.createServer(requestHandler);

// server.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });