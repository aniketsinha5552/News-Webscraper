const express = require("express");
const cors = require("cors");
const fs = require("fs");

// Routes Import
const NewsRoute = require("./routes/News");

const app = express();
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

app.get("/", (req, res) => {
   fs.readFile("./home.html", null,(err, data) => {
      if(err) {
         console.log(err);
         res.send("Error");
      }
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(data);
      res.end();
   });
});

// Routes
app.use("/news", NewsRoute);
