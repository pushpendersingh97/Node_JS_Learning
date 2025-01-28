// const http = require("http");

//////////////////////////////////////// Express Way ///////////////////////////
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  // console.log("In the middleware");
  next();
});

app.use("/add-product", (req, res, next) => {
  // console.log("In another middleware");
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});


app.use((req, res, next) => {
  // console.log("In another middleware");
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