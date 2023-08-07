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
   let home = `
   <div style='color: rgb(1, 46, 46);display: grid;place-items: center;'>
   <a href="https://github.com/aniketsinha5552/News-Webscrapper">
       <h2>News Webscrapper API Documentation</h2>
   </a>
   <h4><a href="https://github.com/aniketsinha5552">Aniket Sinha</a></h4>
   <h3>API Endpoints</h3>
   <ul>
       <li>
           <h4>GET /news/all</h4>
           <p>Get all the news from all the sources</p>
       </li>
       <li>
           <h4>GET /news/:source</h4>
           <p>Get all the news from a particular source (toi/ thehindu/ cnn/ aljazeera)</p>
       </li>
       <li>
           <h4>POST /news/search/:query</h4>
           <p>Search news</p>
           <p>Body: {search: "query"}</p>
       </li>
   </ul>
   
  </div>
   `
   res.send(home);
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
