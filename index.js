const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>Hello I am running application 234</h1>`);
});
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Application is running on!!!! -- >  http://localhost:${PORT}`);
});
