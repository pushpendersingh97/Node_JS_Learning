// const http = require("http");

//////////////////////////////////////// Express Way ///////////////////////////
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  next();
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

// const server = http.createServer(app);
app.listen(3000)


//////////////////////////////////////////// Normal Node Way ///////////////////////////
// const requestHandler = require("./routes");

// const server = http.createServer(requestHandler);

// server.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });