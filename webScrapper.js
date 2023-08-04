const axios = require("axios");
const cheerio = require("cheerio");

const toi = async () => {
  const url = "https://timesofindia.indiatimes.com";
  let r = await axios.get(url);
  let data = r.data;
  let $ = cheerio.load(data);
  let news = [];
  $(".col_l_6").each((i, elem) => {
    const title = $(elem).find("a").text();
    const link = $(elem).find("a").attr("href");
    const img = $(elem).find("a").find("img").attr("data-src");
    if (!img || !link || !title) return;
    news.push({
      title,
      url: link,
      img,
      source: "The Times of India",
      type: "General",
    });
  });
  return news.slice(0, 10);
};

const thehindu = async () => {
  const url = "https://www.thehindu.com/";
  let r = await axios.get(url);
  let data = r.data;
  let $ = cheerio.load(data);
  let news = [];
  $(".element").each((i, elem) => {
    // console.log(elem)
    const title = $(elem).find("a").text();
    const link = $(elem).find("a").attr("href");
    const img = $(elem).find("a").find("img").attr("data-original");
    if (!img || !link || !title) return;
    news.push({
      title,
      url: link,
      img,
      source: "The Hindu",
      type: "General",
    });
  });

  return news.slice(0, 10);
};


module.exports = { toi, thehindu };
