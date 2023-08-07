const router = require("express").Router();

const toi = require("../webscrapper/toi");
const thehindu = require("../webscrapper/thehindu");
const cnn = require("../webscrapper/cnn");
const aljazeera = require("../webscrapper/aljazeera");
const indianexpress = require("../webscrapper/indianexpress");

router.get("/toi", async (req, res) => {
  const news = await toi();
  if(news.length!==0) res.status(200).send(news);
  else res.status(500).send([{title: "Error"}]);
  
  // console.log(news)
});

router.get("/thehindu", async (req, res) => {
  const news = await thehindu();
  if(news.length!==0) res.status(200).send(news);
  else res.status(500).send([{title: "Error"}]);
});

router.get("/cnn", async (req, res) => {
  const news = await cnn();
  if(news.length!==0) res.status(200).send(news);
  else res.status(500).send([{title: "Error"}]);
});

router.get("/aljazeera", async (req, res) => {
  const news = await aljazeera();
  if(news!==0) res.status(200).send(news);
  else res.status(500).send([{title: "Error"}]);
});

router.get("/indianexpress", async (req, res) => {
  const news = await indianexpress();
  if(news.length!==0) res.status(200).send(news);
  else res.status(500).send([{title: "Error"}]);
});

router.get("/all", async (req, res) => {
  let news = [];
  const toiNews = await toi();
  const thehinduNews = await thehindu();
  const cnnNews = await cnn();
  const aljazeeraNews = await aljazeera();
  news = [...toiNews, ...thehinduNews, ...cnnNews, ...aljazeeraNews];
  news.sort(() => Math.random() - 0.5);
  res.send(news);
});

router.post("/search", async (req, res) => {
  let news = [];
  const toiNews = await toi();
  const thehinduNews = await thehindu();
  const cnnNews = await cnn();
  const aljazeeraNews = await aljazeera();
  news = [...toiNews, ...thehinduNews, ...cnnNews, ...aljazeeraNews];
  let searchQuery = req.body.search.toLowerCase();
  news = news.filter((newsItem) =>
    newsItem.title.toLowerCase().includes(searchQuery)
  );
  if(news.length===0) res.status(200).send([{title: "No results found"}])
  res.send(news);
});

module.exports = router;
