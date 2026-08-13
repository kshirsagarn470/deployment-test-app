const express = require("express");

const app = express();

const PORT = process.env.PORT || 9001;

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Portfolio running on port ${PORT}`);
});
