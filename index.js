const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("<h1>Campus Merch Shop</h1><p>Welcome to the org booth.</p>");
});
app.listen(PORT, () => {
  console.log("Shop at http://localhost:" + PORT);
});
