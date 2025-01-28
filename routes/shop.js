const express = require("express");
const path = require("path");
const router = express.Router();

router.get('/', (req, res, next) => {
    // __dirname - absolute path of the directory where the file is located
  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports = router;
