const express = require("express");
const cors = require("cors");
const fs = require("fs");

// Routes Import
const NewsRoute = require("./routes/News");

const app = express();
app.use(cors());
app.use(express.json());

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running");
});

app.get("/", (req, res) => {
   res.send("<h1>News API</h1>");
   // fs.readFile("./home.html", null,(err, data) => {
   //    if(err) {
   //       console.log(err);
   //       res.send("Error");
   //    }
   //    res.writeHead(200, {"Content-Type": "text/html"});
   //    res.write(data);
   //    res.end();
   // });
});

// Routes
app.use("/news", NewsRoute);
