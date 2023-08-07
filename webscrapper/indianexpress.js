const axios = require("axios");
const cheerio = require("cheerio");

const indianexpress = async () => {
  const url = "https://indianexpress.com/section/india/";
  let r = await axios.get(url);
  let data = r.data;
  let $ = cheerio.load(data);
  let news = [];
  $(".articles").each((i, elem) => {
    const title = $(elem).find("h2").text();
    const link = $(elem).find("a").attr("href");
    let img = $(elem).find("a").find("img").attr("src");
    if (img && link && title) {
      news.push({
        title,
        url: link,
        img,
        source: "The Indian Express",
        type: "General",
      });
    }
  });
  return news.slice(0, 15);
};

module.exports = indianexpress;
