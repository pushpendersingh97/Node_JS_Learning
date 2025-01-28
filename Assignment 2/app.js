const express = require("express");

const app = express();

const getBaseHTML = (body) => `<html>
    <head><title> Assignment Page </title></head>
    <body>
    ${body}
    </body>
  </html>`;

app.use("/users", (req, res, next) => {
  res.send(
    getBaseHTML(`<h2>List of users</h2>
      <ul>
        <li>User 1</li>
        <li>User 2</li>
        <li>User 3</li>
      </ul>
      `)
  );
});

app.use("/", (req, res, next) => {
  res.send(getBaseHTML(`<h1>Welcome page</h1>`));
});

// app.use((req, res, next) => {
//   console.log("In the middleware");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("In another middleware");
//   res.send("<h1>Hello from Express</h1>");
// });

app.listen(3000);
