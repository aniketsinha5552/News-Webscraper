const axios = require("axios");
const cheerio = require("cheerio");

const cnn = async () => {
  const url = "https://edition.cnn.com/";
  let r = await axios.get(url);
  let data = r.data;
  let $ = cheerio.load(data);
  let news = [];

  $(
    ".card.container__item.container__item--type-section.container_lead-plus-headlines__item.container_lead-plus-headlines__item--type-section"
  ).each((i, elem) => {
    const title = $(elem).find("a").find("span").text();
    let link = $(elem).find("a").attr("href");
    link = "https://edition.cnn.com" + link;
    let img = $(elem).find("a").find("picture").find("source").attr("srcset");

    if (img && link && title) {
      news.push({
        title,
        url: link,
        img,
        source: "CNN",
        type: "General",
      });
    }
  });

  return news.slice(0, 15);
};

module.exports = cnn;
