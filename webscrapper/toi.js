const axios = require("axios");
const cheerio = require("cheerio");

function imgMutator2(img) {
  if (!img) return img;
  let imgArr = img.split("/");
  let size = imgArr[imgArr.length - 2];
  let sizeArr = size.split(",");
  sizeArr[sizeArr.length - 2] = "width-800";
  size = sizeArr.join(",");
  imgArr[imgArr.length - 2] = size;
  img = imgArr.join("/");
  return img;
}

const toi = async () => {
  const url = "https://timesofindia.indiatimes.com";
  let r = await axios.get(url);
  let data = r.data;
  let $ = cheerio.load(data);
  let news = [];
  $(".col_l_6").each((i, elem) => {
    const title = $(elem).find("a").text();
    const link = $(elem).find("a").attr("href");
    let img = $(elem).find("a").find("img").attr("data-src");
    img = imgMutator2(img);
    if (img && link && title) {
      news.push({
        title,
        url: link,
        img,
        source: "The Times of India",
        type: "General",
      });
    }
  });
  return news.slice(0, 10);
};

module.exports = toi;
